const dbConnect = require("./mongodb");

const insert = async () => {
    const db = await dbConnect();   // -->> return the promise
    const data =  await db.insertMany(
        [
            {name : "note 10", brand : "vivo", price: 450, category : "mobile"},
            {name : "note 8", brand : "vivo", price: 550, category : "mobile"},
            {name : "note 9", brand : "vivo", price: 300, category : "mobile"}
        ]
        )
        if(data.acknowledged){
            console.log("Insert Data")
        }
};


insert();