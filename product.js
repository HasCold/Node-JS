const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    brand : String,
    category : String
});

// mongoose.model("collection name", productSchema)
module.exports = mongoose.model("products", productSchema);
