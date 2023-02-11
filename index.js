// Middleware :- Apply middleware only with routes
// We can access the request and response by middleware and also modify them 

// Route-Level Middleware :- Implement on a single route, group of route, all over the routes of application;

const express = require("express");
const path = require("path"); // path :-- By path module we can access the folder of our project
const publicPath = path.join(__dirname, "public");
const app = express(); // app Means it is executed function of express ; express has another static function which we used below
const reqFilter = require("./middleware")

// Below we apply middleware on a single route
app.get("/login",reqFilter ,(_, res) => {  // Here we add the Route-Level Middleware on the login page
    res.send("<h1> login Page </h1>");
})

app.get("/", (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
});

// Below we apply middleware on a single route
app.get("/about",reqFilter, (_, res) => {  // Here we add the Route-Level Middleware on the about page    
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

//        TYPES OF MIDDLEWARE

// Application-level middleware
// Router-level middleware
// Error-Handling middleware
// Built-In middleware
// Third-Party middleware
