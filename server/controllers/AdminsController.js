const db = require("../dbConnection.js");
const mysqlErros = require("mysql-error-codes");

const AdminsController = {
    GetAllAdmins: (req, res) =>{
        const sqlInsert = "SELECT * FROM admins";
        db.query(sqlInsert, (err,result)=>{
            res.send(result);
        });
    },
    AddAdmin: (req, res) =>{
        const name = req.body.name;
        const password = req.body.password;
        const email = req.body.email;
        const permission = req.body.permission;
        const sqlInsert = `INSERT INTO admins (UserName, Password, Email, Permission) VALUES ("${name}", "${password}", "${email}", "${permission}");`
        if(!name || !password || !email || !permission){
            res.status(400).send("Oh uh, looks like you didn't send one of these: (UserName, Password, Email, Permession)");
            return;
        }
        db.query(sqlInsert, (err, result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY)
                    res.status(400).send("Oh uh, looks like this admin arleady exist!");
                else
                    res.status(500).send(`Oh uh, something went wrong, error: ${err.sqlMessage}`);
                return ;
            }
            res.send("Admin has been added successfuly!")
        });
    },
    DeleteAdmin: (req, res) =>{
        const sqlDelete = `DELETE FROM admins WHERE Id = ${req.body.id};`;
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
            res.send("Admin has been deleted successfuly!")
        });
    },
    UpdateAdmin: (req, res) =>{
        const adminId = req.body.id;
        const name = req.body.name;
        const password = req.body.password;
        const email = req.body.email;
        const permission = req.body.permission;
        const sqlUpdate = `UPDATE admins SET UserName = "${name}", Password = "${password}", Email = "${email}",  Permission = "${permission}" WHERE Id = ${adminId}`
        if(!adminId || !name || !password || !email || !permission){
            res.status(400).send("Oh uh, looks like you didn't send one of these: (adminId, UserName, Password, Email, Permession)");
            return;
        }
        db.query(sqlUpdate, (err,result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY)
                    res.status(400).send("Oh uh, looks like this admin arleady exist!");
                else
                    res.status(500).send(`Oh uh, something went wrong, error: ${err.sqlMessage}`);
                return ;
            }
            if(result.affectedRows === 0){
                res.status(400).send("Oh uh, looks like nothing has changed");
                return;
            }
            res.send("Admin has been updated successfuly!")
        });
    }
}

module.exports = AdminsController;