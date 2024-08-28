const express = require('express');
const path = require("path");
const bcrypt = require("bcrypt");


const app = express();


app.set('view engine','ejs');


app.use(express.static("styles"));


app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/",(req,res)=>{
    res.render("signup");
})

app.listen(5000,()=>{
    console.log(`Server running on port 5000`);
})