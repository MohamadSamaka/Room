const db = require("../dbConnection.js");
const mysqlErros = require("mysql-error-codes");

const CategoriesController = {
    GetAllCategories: (req, res) =>{
        const sqlInsert = "SELECT * FROM categories";
        db.query(sqlInsert, (err,result)=>{
            res.send(result);
        });
    },
    AddCategory: (req, res) =>{
        const sqlInsert = `INSERT INTO categories (Name) VALUES ("${req.body.name}");`
        if(!req.body.name){
            res.status(400).send("Oh uh, looks like you didn't send name");
            return;
        }
        db.query(sqlInsert, (err, result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY)
                    res.status(400).send("Oh uh, looks like this category arleady exist!");
                else
                    res.status(500).send(`Oh uh, something went wrong, error: ${err.sqlMessage}`);
                return ;
            }
            res.send("Category has been added successfuly!")
        });
    },
    DeleteCategory: (req, res) =>{
        const sqlDelete = `DELETE FROM categories WHERE Id = ${req.body.id};`;
        if(!req.body.id){
            res.status(400).send("Oh uh, looks like you didn't send an id!");
            return;
        }
        db.query(sqlDelete, (err,result)=>{
            if(err){
                res.status(500).send(`Oh uh, something went wrong, error: ${err.sqlMessage}`);
                return;
            }
            if(result.affectedRows === 0){
                res.status(400).send("Oh uh, something went wrong, probably this id dosen't exist");
                return;
            }
            res.send("Category has been deleted successfuly!")
        });
    },
    UpdateCategory: (req, res) =>{
        const sqlUpdate = `UPDATE categories SET Name = "${req.body.name}" WHERE Id = ${req.body.id}`
        if(!req.body.name || !req.body.id){
            res.status(400).send("Oh uh, looks like you haven't send a name or an id");
            return;
        }
        db.query(sqlUpdate, (err,result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY)
                    res.status(400).send("Oh uh, looks like this category arleady exist!");
                else
                    res.status(500).send(`Oh uh, something went wrong, error: ${err.sqlMessage}`);
                return ;
            }
            if(result.affectedRows === 0){
                res.status(400).send("Oh uh, looks like nothing has changed");
                return;
            }
            res.send("Category has been updated successfuly!")
        });
    }
}

module.exports = CategoriesController;