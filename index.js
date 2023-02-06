// CRUD -->> Create , Read , Update , Delete

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "CRUD");
console.log(dirPath);
const filePath = `${dirPath}/code.txt`; 

// fs.writeFileSync(filePath, "This is a simple text file"); // -->> Create file

// fs.readFile(filePath,"utf-8",(error, item) => {  // Read file  ; utf-8 is a buffer
//     console.log(item)
// })

// fs.appendFile(filePath, " and file name is code.txt", (err) => { // Update File
//     if(!err) console.log("File is Updated ...");

// });

// fs.rename(filePath, `${dirPath}/node.txt`, (err) => {  // Rename file
//     if(!err) console.log("File Renamed ...");
// })

fs.unlinkSync(`${dirPath}/node.txt`)   // Delete File

// InterView Question
// Buffer :- Means temporary memory location ; Node.js want some memory to perform the operation in our file system