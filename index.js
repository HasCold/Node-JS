// process is a very large property 
// process.argv -->> From this we can take input from command line
console.log(process.argv) // argv -->> argument vector 

// We can give input by cmd line -->> node . hello.txt "Hi, this is me"

const input = process.argv
// In file system : - fs.writeFileSync("file name", "file content");
// const fs = require("fs");
// fs.writeFileSync(input[2], input[3]);

// Add OR Remove the file

const gs = require("fs");
if(input[2]==="add"){
    gs.writeFileSync(input[3], input[4])
}else if(input[2]==="remove"){  // Remove File
    gs.unlinkSync(input[3]);
}else{
    console.log("Invalid Output");
}
