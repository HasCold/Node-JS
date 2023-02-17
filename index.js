// (OS) Operating System Module in Node.js  -->> Those projects in which we have to find the information of our operating system then OS module of node.js will be helpful for us

const os = require("os");
// console.log(os.arch());  // -->> Operating System Architecture
// console.log(os.freemem()/(1024*1024*1024));  // freemem() It shows the free memory in your system in bytes but after the divide it shows the value in GB ;
// console.log(os.totalmem()/(1024*1024*1024));  // totalmem() -->> shows total memory in your system

console.log(os.hostname());
console.log(os.platform());  // -->> window 32
console.log(os.userInfo());  
