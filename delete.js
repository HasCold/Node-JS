const dbConnect = require("./mongodb");

const deleteData = async () => {
    const data = await dbConnect();   // data returns the promise we have to resolve it
    const result = await data.deleteMany(
        {name : "note 8"}
    )
    console.log(result);
    if(result.acknowledged){
        console.log("Record Deleted");
    }
}

deleteData()

// Interview Question :-

// How to check whether any data is deleted or not

// If your desired data is not included in the collection then acknowledged: true , but deleteCount : 0 ; deleteCount shows the number of collection deleted from the database  ;  simply that data is not present in your database