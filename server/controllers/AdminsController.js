const db = require("../dbConnection.js");
const mysqlErros = require("mysql-error-codes");

function PrepareMysqlUpdateCommand(dic, id){
    let mysql = []
    for([key,val] of Object.entries(dic)){
        if(!val)
            continue;
        mysql.push(`${key} = "${val}"`)
    }
    return `UPDATE admins SET ${mysql.join(",")} WHERE Id = ${id}`
}

const AdminsController = {
    GetAllAdmins: (req, res) =>{
        const sqlInsert = "SELECT * FROM admins";
        db.query(sqlInsert, (err,result)=>{
            res.send(result);
        });
    },
    AddAdmin: (req, res) =>{
        const userName = req.body.userName;
        const password = req.body.password;
        const email = req.body.email;
        const permission = req.body.permission;
        const sqlInsert = `INSERT INTO admins (UserName, Password, Email, Permission) VALUES ("${userName}", "${password}", "${email}", "${permission}");`
        if(!userName || !password || !email || !permission){
            res.status(400).send("Oh uh, looks like you didn't send one of these: (UserName, Password, Email, Permession)");
            return;
        }
        db.query(sqlInsert, (err, result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY)
                    res.status(400).send({message: "Oh uh, looks like this admin arleady exist!"});
                else
                    res.status(500).send({message: `Oh uh, something went wrong, error: ${err.sqlMessage}`});
                return ;
            }
            res.send("Admin has been added successfuly!")
        });
    },
    DeleteAdmin: (req, res) =>{
        const sqlDelete = `DELETE FROM admins WHERE Id = ${req.body.adminId};`;
        if(!req.body.adminId){
            res.status(400).send({message: "Oh uh, looks like you didn't send an id!"});
            return;
        }
        db.query(sqlDelete, (err,result)=>{
            if(err){
                res.status(500).send({message: `Oh uh, something went wrong, error: ${err.sqlMessage}`});
                return;
            }
            if(result.affectedRows === 0){
                res.status(400).send({message: "Oh uh, something went wrong, probably this id dosen't exist"});
                return;
            }
            res.send("Admin has been deleted successfuly!")
        });
    },
    UpdateAdmin: (req, res) =>{
        const adminId = req.body.adminId;
        const sentParams = {
            UserName : req.body.userName,
            Password : req.body.password,
            Email : req.body.email,
            Permission : req.body.permissionId
        }
        if(!adminId){
            res.status(400).send({message: "Oh uh, looks like you didn't send an Admin Id"});
            return;
        }
        const sqlUpdate = PrepareMysqlUpdateCommand(sentParams, adminId)
        db.query(sqlUpdate, (err,result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY)
                    res.status(400).send({message: "Oh uh, looks like this admin arleady exist!"});
                else
                    res.status(500).send({message: `Oh uh, something went wrong, error: ${err.sqlMessage}`});
                return ;
            }
            if(result.affectedRows === 0){
                res.status(400).send({message: "Oh uh, looks like nothing has changed"});
                return;
            }
            res.send("Admin has been updated successfuly!")
        });
    }
}

module.exports = AdminsController;