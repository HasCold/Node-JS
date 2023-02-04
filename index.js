const app = require("./app")

var x = "20";
// In Double equals to they check the value not type
if(x==20){ 
    console.log("Matched");
}
console.log(app.z());

const arr = [2,4,7,8,3,9];
const result = arr.filter((item) => {
    // filter method iterate the array and it only executes on the array
    return item >3;
})
console.log(result);