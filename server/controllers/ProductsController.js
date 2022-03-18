const db = require("../dbConnection.js");
const mysqlErros = require("mysql-error-codes");
var del = require('delete');

function GetOriginalFileNames(jsonFiles){
    let result = [];
    if(!jsonFiles) return null;
    jsonFiles.forEach(file => {
        result.push(file.originalname);
    });
    return JSON.stringify(result);
}

function PrepareMysqlUpdateCommand(dic, id){
    let mysql = []
    for([key,val] of Object.entries(dic))
        if(val){
            if(typeof(val) === typeof([]) && val.length === 0)
                continue
            if(typeof(val) === typeof([])){
                mysql.push(`${key} = '${GetOriginalFileNames(val)}'`)
                continue
            }
            if(parseInt(val)){
                mysql.push(`${key} = ${val}`)
                continue;
            }
            
            mysql.push(`${key} = "${val}"`)
        }
    return `UPDATE products SET ${mysql.join(",")} WHERE Id = ${id}`
}

function PrepareMysqlAddCommand(dic){
    let mysql = [[],[]]
    for([key,val] of Object.entries(dic))
        if(val){
            if(typeof(val) === typeof([]) && val.length === 0)
                continue
            if(typeof(val) === typeof([])){
                mysql[0].push(key);
                mysql[1].push(`'${GetOriginalFileNames(val)}'`);
                continue
            }
            if(parseInt(val)){
                mysql[0].push(key);
                mysql[1].push(val);
                continue;
            }
            mysql[0].push(key);
            mysql[1].push(`"${val}"`);
        }
    return `INSERT INTO products (${mysql[0].join(",")}) VALUES (${mysql[1].join(",")})`;
}


function DeleteImagesFiles(images){
    const PcImages = JSON.parse(images.Images).map(i => "images/pc-products/" + i);
    const MobileImages = JSON.parse(images.MobileImages).map(i => "images/mobile-products/" + i);
    del(PcImages, (err, deleted) => {
        if (err){
            console.log(err);
            throw err;
        }
    });
    del(MobileImages, (err, deleted) => {
        if (err){
            console.log(err);
            throw err;
        }
    }); 
}


const ProductsController = {
    GetAllProducts: (req, res) =>{
        const sqlInsert = "SELECT * FROM products";
        db.query(sqlInsert, (err,result)=>{
            res.send(result);
        });
    },
    AddProduct : (req, res) =>{
        if(!req.files){
            res.status(400).send("Oh uh, Please insert one image at least");
            return;
        }
        const sentParams = {
            "Title": req.body.title,
            "Description": req.body.description,
            "CategoryId": req.body.category,
            "subCategoryId": req.body.subCategory,
            "Images": req.files["pc-product-images"],
            "MobileImages": req.files["mobile-product-images"],
            "Availability": req.body.availability,
            "Price": req.body.price
        };
        if(!sentParams["Title"] || !sentParams["Description"]|| !sentParams["CategoryId"] || !sentParams["subCategoryId"] || !sentParams["Images"] || !sentParams["Price"]){
            res.status(400).send("Oh uh, something went wrong!");
            return;
        }
        const sqlInsert = PrepareMysqlAddCommand(sentParams);
        db.query(sqlInsert, (err,result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY){
                    res.status(400).send("Oh uh, looks like this product already exist");
                    return;
                }
                res.status(400).send(`Oh uh, something went wrong! , err: ${err.sqlMessage}`);
                return;
            }
            res.send("Product has been added successfully!")
        });
    },
    UpdateProduct : (req, res) =>{
        const id = req.body.id;
        const sentParams = {
            "Title": req.body.title,
            "Description": req.body.description,
            "CategoryId": req.body.category,
            "subCategoryId": req.body.subCategory,
            "Images": req.files["pc-product-images"],
            "MobileImages": req.files["mobile-product-images"],
            "Availability": req.body.availability,
            "Price": req.body.price
        };
        if(!id){
            res.status(400).send("Oh uh, looks like you didn't send an id");
            return;
        }
        const sqlInsert = PrepareMysqlUpdateCommand(sentParams , id);
        db.query(sqlInsert, (err,result)=>{
            if(err){
                res.status(400).send(`Oh uh, something went wrong, error: ${err.sqlMessage}`);
                return;
            }
            if(result.affectedRows === 0){
                res.status(400).send("Oh uh, something went wrong, probably this id dosen't exist");
                return;
            }
            res.send("Product has been updates successfully!")
        });
    },
    DeleteProduct: (req, res) =>{
        const sqlDelete = `DELETE FROM products WHERE Id = ${req.body.id};`;
        const sqlGetImages = `SELECT Images, MobileImages from products WHERE Id = ${req.body.id}; `;
        if(!req.body.id){
            res.status(400).send("Oh uh, looks like you didn't send an id");
            return;
        }

        db.query(sqlDelete, (err,result)=>{
            if(err){
                res.status(500).send("Oh uh, something went wrong, error: ", err.sqlMessage);
                return;
            }
            if(result.affectedRows === 0){
                res.status(400).send("Oh uh, something went wrong, probably this id dosen't exist");
                return;
            }
            res.send("Products has been deleted successfuly!")
        });
        db.query(sqlGetImages, (err,result)=>{
            DeleteImagesFiles(result[0])
        });
        
    }
}

module.exports = ProductsController;