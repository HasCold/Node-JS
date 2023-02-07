console.log("Starting Up ...");

setTimeout(() => {   // setTimeout() is a part of C++ and related to the Node APIs and Callback Queue ; setTimeout() is a inherit library of C++ that's why the function goes to the Node APIs (Means two programming languages interface) and also similar to this other library which we are using in node.js that will go into the Node API's block and CallBack Queue block ; 
    console.log("2 seconds log ...");
}, 2000);
setTimeout(() => {
    console.log("0 second log ...");
}, 0);

console.log("Finishing Up ...");