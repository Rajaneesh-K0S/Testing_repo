const path = require('path');
const express = require("express");
const app = express();

app.get('/',(req,res,next)=>{res.send('hi')});

app.listen(3000,()=>console.log("hello"));