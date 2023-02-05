// ******************* Global and Non-Global Module *****************

// Non Global Module :- FileSystem(fs), Buffer, HTTP ; The module which need to be import that will be the global module 
// Global Module :- console ;  The module which can't be import that will be the global module
// Core Modules :- By-Default features of any progrmming language is core-modules 

const fs = require("fs");
console.log("HasCold");
fs.writeFileSync("Hello2.txt","Feel Free and Independant Yourself");
console.log("-->>",__dirname)
console.log("-->>",__filename)

// Another way to import file system
const gs = require("fs").writeFileSync;
gs("code.txt", "I am Here");