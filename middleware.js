// Middleware
module.exports =  reqFilter = (req, res, next) => {   // next is a function used to proceed the webiste
    if(!req.query.age){
        res.send("<h1>Please Provide Age !!!</h1>");
    }else if(req.query.age < 18){
        res.send("<h2>Age below 18, Access Denied...</h2>")
    }
    else{
        next();  // jab bhi hame agle routes pr jana ha tu next() ko call krna parega nahi tu loading show hoti rahe gi
    }
}
// app.use(reqFilter); This will work as a Application-level Middleware ; So we have comment out
