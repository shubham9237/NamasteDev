import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const waitListClients = []
let data = 'Initial data'
let longPollingDatadata = 'Initial data'

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

//Short Polling
app.get("/getDataShortPolling", (req,res)=>{
    res.send({data});
})

app.get("/updateDataShortPolling", (req,res)=>{
    data= "updated data";
    res.send({
        data
    })
})

// Long Polling

app.get("/getDataLongPolling", (req,res)=>{
    if(longPollingDatadata !== req.query.lastData){
        res.json({longPollingDatadata})
    }else {
        waitListClients.push(res)
    }
})

app.get("/updateDataLongPolling", (req,res)=>{
    longPollingDatadata = req.query.longPollingDatadata;
    while(waitListClients.length > 0) {
        const client=waitListClients.pop();
        client.json({longPollingDatadata})
    }
    res.send({"msg":"updated"})
})

const PORT = process.env.PORT || 5011;
app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});
