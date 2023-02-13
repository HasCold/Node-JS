//   npm i mongodb  -->> The official Mongodb driver for Node.js;

// Instead of using localhost we use 127.0.0.1
// The reason for this is that "localhost" and "127.0.0.1" both refer to the same IP address, which is the loopback address on the local machine.

// In IP networking, "localhost" is a hostname that resolves to the IP address 127.0.0.1, which is used to access the network services running on the same machine. When a client program, such as a web browser or Node.js application, wants to access a network service running on the same machine, it typically connects to "localhost" or "127.0.0.1".

// In the context of MongoDB, using "localhost" or "127.0.0.1" in the connection URL tells the MongoDB client to connect to the MongoDB server running on the same machine. By using "127.0.0.1" instead of "localhost", you are specifying the IP address directly, which can sometimes be more reliable and efficient than using the hostname.

// localhost is a special term that refers to the current machine, so it's essentially a shortcut for 127.0.0.1
// 127.0.0.1 is the IP address of the localhost, which is the same machine you're running your Node.js application on.
// By replacing localhost with 127.0.0.1, you are explicitly specifying the IP address of the machine you want to connect to, instead of using the shortcut. This can sometimes help resolve connection issues because it's a more direct approach.

const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1:27017";   // Path to tell the node location of mongodb
const client = new MongoClient(url);
const database = "e-comm";

module.exports =  async function dbConnect(){
    let result = await client.connect();  // client is a promise  ; if we put await the promise will handle by themself; 
    console.log("Connected Successfully to server") 
    let db = result.db(database);
    return db.collection("products");
    // let res = await collection.find({name: "nokia 1100"}).toArray();
    // console.log(res);
}
