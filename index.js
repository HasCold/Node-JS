const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "Files"); // Files folder path directory
console.log(dirPath);

// we created files in the file directory by the loop

// for( i = 0; i < 5; i++){
//     fs.writeFileSync(dirPath+`/Code${i}.txt`, `A sample test file ${i}`);
// }

fs.readdir(dirPath, (err, Files) => {
    Files.forEach((item) => {
        console.log("File name is", item);
    })
})
