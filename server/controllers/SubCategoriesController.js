const db = require("../dbConnection.js");
const mysqlErros = require("mysql-error-codes");

function PrepareMysqlUpdateCommand(dic, id){
    let mysql = []
    for([key,val] of Object.entries(dic)){
        if(!val)
            continue;
        mysql.push(`${key} = "${val}"`)
    }
    return `UPDATE subcategories SET ${mysql.join(",")} WHERE Id = ${id}`
}


const SubCategoriesController = {
    GetAllSubCategories: (req, res) =>{
        const sqlInsert = "SELECT * FROM subcategories";
        db.query(sqlInsert, (err,result)=>{
            res.send(result);
        });
    },
    AddSubCategory: (req, res) =>{
        const sqlInsert = `INSERT INTO subcategories (CategoryId, Name) VALUES (${req.body.parentCategoryId} ,"${req.body.newSubCategoryName}");`
        db.query(sqlInsert, (err, result)=>{
            if(err){
                switch (err.errno) {
                    case mysqlErros.ER_DUP_ENTRY: 
                        res.status(400).send({message: "Oh uh, looks like this sub category arleady exist!"})
                        return;
                    case mysqlErros.ER_NO_REFERENCED_ROW_2:
                        res.status(400).send({message: "Oh uh, Cannot add or update a child row: a foreign key constraint fails!"})
                        return;
                    case mysqlErros.ER_BAD_FIELD_ERROR:
                        res.status(400).send({message: "oh uh, make sure of your inputs!"})
                        return;
                    default:
                        res.status(500).send({message: `Oh uh, something went wrong, error: ${err.sqlMessage}`});
                        return;
                }
            }
            if(!req.body.newSubCategoryName){
                res.status(400).send({message: "Oh uh, looks like you didn't send name"});
                return;
            }
            res.send("Category has been added successfuly!")
        });
    },
    DeleteSubCategory: (req, res) =>{
        const subCategoryId = req.body.subCategoryId;
        const sqlDelete = `DELETE FROM subcategories WHERE Id = ${req.body.subCategoryId};`;
        db.query(sqlDelete, (err,result)=>{
            if(err){
                switch (err.errno) {
                    case mysqlErros.ER_BAD_FIELD_ERROR:
                        res.status(400).send({message: "oh uh, make sure of your input!"})
                        return;
                    default:
                        res.status(500).send({message: `Oh uh, something went wrong, error: ${err.sqlMessage}`});
                        return;
                }  
            }
            if(result.affectedRows === 0){
                res.status(400).send({message: "Oh uh, something went wrong, probably this id dosen't exist"});
                return;
            }
            res.send("Category has been deleted successfuly!")
        });
    },
    UpdateSubCategory: (req, res) =>{
        const targetedSubCategory = req.body.subCategoryId
        const sentParams = {
            CategoryId : req.body.newParentCategoryId,
            Name : req.body.newSubCategoryName
        }
        console.log
        if(!targetedSubCategory){
            res.status(400).send({message: "Oh uh, looks like you haven't send a name or an id"});
            return;
        }
        const sqlUpdate = PrepareMysqlUpdateCommand(sentParams, targetedSubCategory)
        // const sqlUpdate = `UPDATE subcategories SET CategoryId = ${req.body.CategoryId}, Name = "${req.body.name}" WHERE Id = ${req.body.subCategoryId}`
        db.query(sqlUpdate, (err,result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY)
                    res.status(400).send({message: "Oh uh, looks like this category arleady exist!"});
                else
                    res.status(500).send({message: `Oh uh, something went wrong , error: ${err.sqlMessage}`});
                return ;
            }
            if(result.affectedRows === 0){
                res.status(400).send({message: "Oh uh, looks like nothing has changed"});
                return;
            }
            res.send("Category has been updated successfuly!")
        });
    }
}

module.exports = SubCategoriesController;