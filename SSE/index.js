import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
app.get("/sse", (req, res) => {
    // streaming data 
    res.setHeader("Content-Type","text/event-stream")
    .setHeader("Connection","keep-alive")
    .setHeader("Cache-Control","no-cache");

    res.write('data: welcome to server sent events \n\n')


    let interval = setInterval(()=>{
        res.write(`data: server time ${new Date().toLocaleDateString()} \n\n`)
    }, 5000)

    req.on('close', () => {
        clearInterval(interval)
    })
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 5011;
app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});
