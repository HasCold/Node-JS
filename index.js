const express = require("express");
const app = express();  // make express function executable;
const connection = require("./databaseSQL");

app.get("/", (req, res) => {
    res.send("Hey There");
})

app.listen(3000, () => {
    console.log("App Listening ")
    connection.connect((err) => {
        if(err) throw err;
        console.log("Database connected");
    })
})

connection.query("select * from user", (err, result) => {
        console.warn("result", result);
})