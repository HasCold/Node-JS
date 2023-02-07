// ****************** Asynchronous and Synchronous *******************

// In Synchronous operations task are perfromed one at a time
// In Asynchronous operations, Second task do not wait to finish First task

// Node.js is Asynchronous and single-threaded  Programming Language

// Handle DrawBack Of Asynchronous :--
let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(20);
    }, 2000)  // 2000 sec -->> 2 sec
})
waitingData.then((data) => {
    b = data;
    console.log(a+b);
})


