const express = require("express");
const bodyParser = require("body-parser");
const client = require("./client");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    client.getAll(null, (err, data) => {
        res.send(data.customers)
    })
})
app.post("/create", (req,res)=>{
    let newCustomer = {
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
    }
    client.insert(newCustomer, (err, data)=>{
        console.log(data);
    })
})
app.post("/update", (req,res)=>{
    let newUpdatedCustomer = {
        id:req.body.id,
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
    }

    client.update(newUpdatedCustomer, (err, data)=>{
        console.log(data);
    })

})
app.post("/remove", (req,res)=>{
    let customerId = req.body.id
    client.remove(customerId, (err, data)=>{
        console.log(data);
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})