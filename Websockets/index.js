import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
const server = createServer(app)
const io = new Server(server)
// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

io.on('connection',(socket)=>{
    console.log("connection established");
    socket.on('chat message', (msg)=>{
        console.log(msg);
        io.emit("chat message", msg);
    })

    socket.on('disconnect', ()=>{
        console.log("user disconnected");
    })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 5011;
server.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});
