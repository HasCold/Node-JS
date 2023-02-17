// multer npm package :- Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.  npm i multer

const express = require("express");
const multer = require("multer");
const app = express();  // make express fucntion executable in app 

const uplaod = multer({  // It is a middleware ; we will use as a second parameter in a route
    storage:multer.diskStorage({
        destination:function(req, file, cb){   // cb -->> refers to callback
            cb(null, "uploads")
        },
        filename:function(req, file, cb){
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file");

app.post("/upload", uplaod, (req, res) => {
    res.send("Upload Done");
})
app.listen(5000);