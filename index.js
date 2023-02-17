const express = require("express");
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

app.get("/search/:key", async (req, res) => {  // -->> FIND OR READ method
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or" : [
                {"name" : {$regex : req.params.key}},
                {"brand" : {$regex : req.params.key}},
                {"category": {$regex : req.params.key}}
            ]
        }
    );
    res.send(data);
})

app.listen(5000);

// Interview Question : - 

// Q. Does id put in the body or query params ??
// A. In the DELETE method we put id directly into the body ; 
// But in the PUT method , it is upto you whether you have to put id  in the query params or body
