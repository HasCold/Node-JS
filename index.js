const express = require("express");
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result); 
    res.send(result);
})

app.get("/list", async (req, res) => {
    let data = await Product.find();
    res.send(data);    
})

app.delete("/delete/:_id", async (req, res) => {
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    res.send(data);    
})

app.put("/update/:_id", async (req, res) => {
    console.log(req.params);
    let data = await Product.updateOne(
        req.params,  // -->> condition
        { 
            $set : req.body
        },  
        );
    res.send(data);    
})

app.listen(5000);

// Interview Question : - 

// Q. Does id put in the body or query params ??
// A. In the DELETE method we put id directly into the body ; 
// But in the PUT method , it is upto you whether you have to put id  in the query params or body
