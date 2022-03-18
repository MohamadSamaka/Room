const mysql = require("mysql");
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2000',
    database: 'roomwebsite'
})

module.exports = db;

