const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

//database
const URL = process.env.DB_URL;
mongoose.connect(URL)
.then(()=>{
    console.log("Database Connection established");
})
.catch((err)=>{
    console.log(err);
});

//middleware
//Router

//server
app.listen(port,()=>{
    console.log("Server Running");
})




