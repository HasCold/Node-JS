// Middleware :- Apply middleware only with routes
// We can access the request and response by middleware and also modify them 

// What are middleware ? (Interview Question)
// To filter out the request and response ; to check the authentication 

const express = require("express");
const path = require("path"); // path :-- By path module we can access the folder of our project
const publicPath = path.join(__dirname, "public");
const app = express(); // app Means it is executed function of express ; express has another static function which we used below

// Middleware
const reqFilter = (req, res, next) => {   // next is a function used to proceed the webiste
    if(!req.query.age){
        res.send("<h1>Please Provide Age !!!</h1>");
    }else if(req.query.age < 18){
        res.send("<h2>Age below 18, Access Denied...</h2>")
    }
    else{
        next();  // jab bhi hame agle routes pr jana ha tu next() ko call krna parega nahi tu loading show hoti rahe gi
    }
}
app.use(reqFilter);

app.get("/login", (_, res) => {
    res.render("login");
})

app.get("/", (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
});
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

//        TYPES OF MIDDLEWARE

// Application-level middleware
// Router-level middleware
// Error-Handling middleware
// Built-In middleware
// Third-Party middleware
