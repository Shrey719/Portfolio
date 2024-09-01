import express from 'express';
import http from 'node:http';
import path from "node:path";


const app = express();
const server = http.createServer();
const __dirname = process.cwd();
const PORT = 8080;

app.use(express.static("static"));

app.get('*', function(req, res) {res.sendFile(path.join(__dirname, "static/404.html"))})

server.on("request", (req, res) => {
app(req, res)
})
server.listen({port: PORT}, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})