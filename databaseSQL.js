// package :- npm i mysql

const mysql = require("mysql");
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "YES",
    database: "test_node.js",
});

module.exports = connection
