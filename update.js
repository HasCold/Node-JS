const dbConnect = require("./mongodb");

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        {name : "note 11"},   // want to update in the collection 
        {$set : {name : "note 10", price : 1200, brand : "iphone"}}   // changes set into the collection
    )
    console.log(result);
}

updateData()