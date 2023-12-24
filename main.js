const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path =require('path')
const logInRouter=require('./routes/log_in');

app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded());
app.use(logInRouter);

app.use((req,res)=>{
    res.status(404).send("<h1>404 Page not found</h1>")

}) 

app.listen(3000, () => {
    console.log("Server Successfully Connect http://localhost:3000");
});
