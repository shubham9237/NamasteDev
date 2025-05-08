import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('server1/public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "server1/public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`);
});
