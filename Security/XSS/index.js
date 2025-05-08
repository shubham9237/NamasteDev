import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// app.use((req, res, next)=>{
//     res.setHeader(
//         "Content-Security-Policy",
//         // "default-src 'self';script-src 'self' 'nonce-randomKey' 'unsafe-inline' cdn.freecodecamp.org;"
//         // load images via img-src as csp, unsafe-inline to execute the inline scripts
//     )
//     next();
// })

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});
