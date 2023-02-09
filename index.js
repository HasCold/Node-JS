const express = require("express");
const path = require("path");
// path :-- By path module we can access the folder of our project


const app = express(); // app Means it is executed function of express ; express has another static function which we used below
const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));
// What is static method :-- static method load the static content of our pages

app.get("", (_, res) => {   // instead of req we use _ for short 
    res.sendFile(`${publicPath}/index.html`)
});
app.get("/aboutme", (_, res) => {   // instead of req we use _ for short 
    res.sendFile(`${publicPath}/about.html`)
});
app.get("/help", (_, res) => {   // instead of req we use _ for short 
    res.sendFile(`${publicPath}/help.html`)
})
app.get("*", (_, res) => {   // * -->> we use this so by-Defalut the wrong URL page will be rendered the no-page.html 
    res.sendFile(`${publicPath}/noPage.html`)
})
app.listen(5000);