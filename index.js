const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
console.log("Server Successfully Connected !!!")

// Schema :- a schema is a way to define the structure and properties of your data ; every field in the database is define into the schemas
// Model : - A model uses the schemas and connect the mongoDb and Node.js

const ProductSchemas = new mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    category : String,
});

const SaveinDB = async () => {
// Create a model for that schema -->> mongoose.model('User', userSchema)
    const Product = mongoose.model("products", ProductSchemas);
    let data = new ProductModel({name : "Note Pro", price : 1200, brand : "max", category : "mobile"});  // new instance
    let result = await data.save();  // The save() method is used to persist the new document to the database. It is an asynchronous method that returns a Promise which resolves to the saved document, including any generated IDs or other fields that the database may add.
    // So, if you remove the save() method, you won't be able to insert new data into the MongoDB database using Mongoose.  
    
    console.log(result);
}    

const UpdateinDB = async () => {
    const Product = await mongoose.model("products", ProductSchemas);
    let data = await Product.updateOne(
        {name : 'nokia'},
        {
            $set : {price : 300, name : "Nokia 3310"}
        }
    )
    console.log(data);
}

const DeleteinDB = async () => {
    const Product = await mongoose.model("products", ProductSchemas);
    let data = await Product.deleteOne(
        {name : "u10"}
    );
    console.log(data);
}

const FindinDB = async () => {  // READ data
    const Product = await mongoose.model("products", ProductSchemas);
    let data = await Product.find(
        //  We can Search any item by using FIND method -->> Interview Question
        {name : "note 5"}  
    );
    console.log(data);
}
FindinDB()