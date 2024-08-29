const express = require('express');
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.set('view engine','ejs');


app.use(express.static("styles"));
app.use(express.static("Image-Logos"));
app.use(express.static("scripts"));


app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/seats",(req,res)=>{
    res.render("seats");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/business",(req,res)=>{
    res.render("business");
})
app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})


app.post("/signup",async (req,res)=>{
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    const existingUser = await collection.findOne({name: data.name});

    if(existingUser){
        res.send("User already exists.Please use a different username");
    }
    else{

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;

        const userdata = await collection.insertMany(data);
    console.log(userdata);
    }

    
})

app.post("/login", async (req,res)=>{
    try{
        const check = await collection.findOne({name: req.body.username});
        if(!check){
            res.send("User cannot be found");
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch){
            res.render("index");
        }
        else{
            req.send("wrong Password");
        }
    }catch{
        res.send("wrong Details");
    }
});


app.listen(5000,()=>{
    console.log(`Server running on port 5000`);
})