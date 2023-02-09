const express = require("express");
const path = require("path");
// path :-- By path module we can access the folder of our project


const app = express(); // app Means it is executed function of express ; express has another static function which we used below
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
// What is static method :-- static method load the static content of our pages

app.listen(5000);