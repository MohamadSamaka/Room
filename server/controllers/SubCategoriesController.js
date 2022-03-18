const db = require("../dbConnection.js");
const mysqlErros = require("mysql-error-codes");

const SubCategoriesController = {
    GetAllCategories: (req, res) =>{
        const sqlInsert = "SELECT * FROM subcategories";
        db.query(sqlInsert, (err,result)=>{
            res.send(result);
        });
    },
    AddCategory: (req, res) =>{
        const sqlInsert = `INSERT INTO subcategories (CategoryId, Name) VALUES (${req.body.subCategoryId} ,"${req.body.name}");`
        db.query(sqlInsert, (err, result)=>{
            if(err){
                switch (err.errno) {
                    case mysqlErros.ER_DUP_ENTRY: 
                        res.status(400).send("Oh uh, looks like this sub category arleady exist!")
                        return;
                    case mysqlErros.ER_NO_REFERENCED_ROW_2:
                        res.status(400).send("Oh uh, Cannot add or update a child row: a foreign key constraint fails!")
                        return;
                    case mysqlErros.ER_BAD_FIELD_ERROR:
                        res.status(400).send("oh uh, make sure of your inputs!")
                        return;
                    default:
                        res.status(500).send(`Oh uh, something went wrong, error: ${err.sqlMessage}`);
                        return;
                }
            }
            if(!req.body.name){
                res.status(400).send("Oh uh, looks like you didn't send name");
                return;
            }
            res.send("Category has been added successfuly!")
        });
    },
    DeleteCategory: (req, res) =>{
        const sqlDelete = `DELETE FROM subcategories WHERE Id = ${req.body.subCategoryId};`;
        db.query(sqlDelete, (err,result)=>{
            if(err){
                switch (err.errno) {
                    case mysqlErros.ER_BAD_FIELD_ERROR:
                        res.status(400).send("oh uh, make sure of your input!")
                        return;
                    default:
                        res.status(500).send(`Oh uh, something went wrong, error: ${err.sqlMessage}`);
                        return;
                }  
            }
            if(result.affectedRows === 0){
                res.status(400).send("Oh uh, something went wrong, probably this id dosen't exist");
                return;
            }
            res.send("Category has been deleted successfuly!")
        });
    },
    UpdateCategory: (req, res) =>{
        const sqlUpdate = `UPDATE subcategories SET CategoryId = ${req.body.CategoryId}, Name = "${req.body.name}" WHERE Id = ${req.body.subCategoryId}`
        db.query(sqlUpdate, (err,result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY)
                    res.status(400).send("Oh uh, looks like this category arleady exist!");
                else
                    res.status(500).send("Oh uh, something went wrong");
                return ;
            }
            if(!req.body.name || !req.body.id){
                res.status(400).send("Oh uh, looks like you haven't send a name or an id");
                return;
            }
            if(result.affectedRows === 0){
                res.status(400).send("Oh uh, looks like nothing has changed");
                return;
            }
            res.send("Category has been updated successfuly!")
        });
    }
}

module.exports = SubCategoriesController;