require('dotenv').config()
const express=require('express')
const app=express()
app.get("/", (req, res) => {  
    res.send("Server is working");
});
module.exports=app;