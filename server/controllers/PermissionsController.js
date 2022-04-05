const db = require("../dbConnection.js");
const mysqlErros = require("mysql-error-codes");

const PermissionsController = {
    GetAllPermissions: (req, res) =>{
        const sqlInsert = "SELECT * FROM permissions";
        db.query(sqlInsert, (err,result)=>{
            res.send(result);
        });
    },
    AddPermission: (req, res) =>{
        const sqlInsert = `INSERT INTO permissions (Name) VALUES ("${req.body.permissionName}");`;
        if(!req.body.permissionName){
            res.status(400).send({message: "Oh uh, looks like you didn't send name"});
            return;
        }
        db.query(sqlInsert, (err, result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY)
                    res.status(400).send({message: "Oh uh, looks like this permession arleady exist!"});
                else
                    res.status(500).send({message: `Oh uh, something went wrong, error: ${err.sqlMessage}`});
                return ;
            }
            res.send("Permission has been added successfuly!")
        });
    },
    DeletePermission: (req, res) =>{
        const sqlDelete = `DELETE FROM permissions WHERE Id = ${req.body.PermissionId};`;
        if(!req.body.PermissionId){
            res.status(400).send({message: "Oh uh, looks like you didn't send an id"});
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
            res.send("Permession has been deleted successfuly!")
        });
    },
    UpdatePermission: (req, res) =>{
        const sqlUpdate = `UPDATE permissions SET Name = "${req.body.newPermissionName}" WHERE Id = ${req.body.permissionId}`
        if(!req.body.newPermissionName || !req.body.permissionId){
            res.status(400).send({message: "Oh uh, looks like you haven't send a name or an id"});
            return;
        }
        db.query(sqlUpdate, (err,result)=>{
            if(err){
                if(err.errno == mysqlErros.ER_DUP_ENTRY)
                    res.status(400).send({message: "Oh uh, looks like this category arleady exist!"});
                else
                    res.status(500).send({message: `Oh uh, something went wrong, error: ${err.sqlMessage}`});
                return ;
            }
            if(result.affectedRows === 0){
                res.status(400).send({message: "Oh uh, looks like nothing has changed"});
                return;
            }
            res.send("Permission has been updated successfuly!")
        });
    }
}


module.exports = PermissionsController;