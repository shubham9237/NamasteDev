import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((req,res,next)=>{
    res.setHeader('Content-Security-Policy',"frame-ancestors 'self'")
    next();
})
app.use(express.static('server2/public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/ifrmae-website1.html"));
});
app.get("/second", (req, res) => {
    res.sendFile(path.join(__dirname, "public/ifrmae-website12.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});
