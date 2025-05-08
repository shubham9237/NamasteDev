const bodyParser = require("body-parser");
const express = require("express")
const app = express();

app.use(bodyParser.json())

app.post("/webhook", (req,res,next)=>{
    const payload =req.body;
    console.log(payoad);
    res.status(200).send("hello");
})
 

app.listen(3000,(err) =>{
    console.log(err);
})