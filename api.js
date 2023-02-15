// GET method : - Read Data Through API 
// POST method : - New Data / Create Data Through API 
// PUT method : - Update Data Through API 
// DELETE method : - Delete Data Through API 

// We can entry the data by the POST API

const express = require("express");
const dbConnect = require("./mongodb");
const app = express();
const mongoDb = require("mongodb");

// Interview Question
// What will you use to get body from request ?? 
// A) express.json()  /  OR  /  body.parser (But in the older version of  express js)

app.use(express.json());  // We can get data from POSTman to node.js

app.get("/", async (req, res) => {
    let data = await dbConnect()
    data = await data.find({}).toArray();
    console.log(data);
    res.send(data);
})

app.post("/", async (req, res) => {
    // console.log(req.body); // Data comes from POSTman to node.js
    let data = await dbConnect()
    let result = await data.insertOne(req.body)
    res.send(result)  // -->> Jo API hame response degi
    console.log(result);
})

app.put("/:name", async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        {name : req.params.name}, // Query params  // 1. -->> What collection should be changed / condition 
        {$set : req.body}    // 2. -->> Data passed on our databases
        )
    console.log(result);
    res.send({result: "update"});
})

app.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id : new mongoDb.ObjectId(req.params.id)})  // we have to create ObjectId instance
    res.send(result);
})

app.listen(5000);
