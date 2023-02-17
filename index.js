const express = require("express");
const EventEmitter = require("events");  // events -->> In-Built module ; we take a EventEmitter in capital so it means it takes as a class  
const app = express();
const event = new EventEmitter;

// We have to check how many API's being called in the system

let count = 0;
// we have to handle event like this
event.on("count API", () => {  // Jaise hi hamara count API call hoga tu ye code execute hogae ga ;
    console.log("Event Called for", count++, "time")
})

app.get("/", (req, res) => {
    res.send("api called");
    event.emit("count API");
})
app.get("/search", (req, res) => {
    res.send("Search api called");
    event.emit("count API");  // Jitni baar ye event call hoga utni barr event emit hoga
})
app.get("/update", (req, res) => {
    res.send("Update api called");
    event.emit("count API");
})

app.listen(5000);