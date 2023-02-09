// Express JS is a Node.js Framework ; npm i express

const express = require("express");
const app = express();

app.get("", (req, res) => {
    console.log("Data send by browser ==>> ", req.query.name);
    res.send("Welcome! " + req.query.name);
});
app.get("/about", (req, res) => {
    res.send("Hello, This is About Page");
});
app.get("/help", (req, res) => {
    res.send("Hello, This is Help Page");
})
app.listen(5000);