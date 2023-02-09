const express = require("express");
const path = require("path");
// path :-- By path module we can access the folder of our project

const app = express(); // app Means it is executed function of express ; express has another static function which we used below
const publicPath = path.join(__dirname, "public");

// These parameters are fixed 
app.set("view engine", "ejs"); // make a folder of views which is the By-Default configuration because we are using the template engine

app.get("", (_, res) => {   // instead of req we use _ for short 
    res.sendFile(`${publicPath}/index.html`)
});

// we get dynamic data

app.get("/profile", (_, res) => {   // instead of req we use _ for short 
    const user = {
        name : "Hasan",
        email : "ha03@gmail.com",
        city : "Karachi",
        age : "20", 
        skills : ["JS", "Node.js", "React.js", "C++"]
    }
    res.render("profile", {user});
});

app.get("/login", (_, res) => {
    res.render("login");
})

app.get("/aboutme", (_, res) => {   // instead of req we use _ for short 
    res.sendFile(`${publicPath}/about.html`)
});
app.get("/contact", (_, res) => {   // instead of req we use _ for short 
    res.sendFile(`${publicPath}/help.html`)
})

// How to laod the file in the get Method ; Interview Question 
app.get("*", (_, res) => {   // * -->> we use this so by-Defalut the wrong URL page will be rendered the no-page.html 
    res.sendFile(`${publicPath}/noPage.html`)
})
app.listen(5000);