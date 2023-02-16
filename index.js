const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    
    // Schema :- a schema is a way to define the structure and properties of your data ; every field in the database is define into the schemas
    // Model : - A model uses the schemas and connect the mongoDb and Node.js

    const ProductSchemas = new mongoose.Schema({
        name : String,
        price : Number
    });
    // Create a model for that schema -->> mongoose.model('User', userSchema)
    const ProductModel = mongoose.model("products", ProductSchemas);
    let data = new ProductModel({name : "m-10", price : 1200});  // new instance
    let result = await data.save();  
    console.log(result);
}    
main();