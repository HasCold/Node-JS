const dbConnect = require("./mongodb")

// BELOW ARE THE TWO ASYNCHRONOUS OPEARATION USING .then method and async await ; But the most preferable method is async await  
// 1. -->>
// dbConnect().then((res) => {
//     res.find({}).toArray().then((data) => {   // It will give you a promises
//         console.log(data);
//     })
// })

// 2. -->> 
const main = async () => {
    let data = await dbConnect();
    data = await data.find({}).toArray();  // Read data from database
    console.log(data);
}

main();