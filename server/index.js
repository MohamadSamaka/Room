const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2000',
    database: 'roomwebsite'
})

app.use(
    cors({
    origin: "http://localhost:3000",
})
)

app.get('/api/get',  (req, res) =>{
    const sqlInsert = "SELECT * FROM Products";
    db.query(sqlInsert, (err,result)=>{
        res.send(result);
    });
});


app.get('/',  (req, res) =>{
    res.send("its working ig.")
});

app.listen(3001, () =>{
    console.log("running on 3001.");
})