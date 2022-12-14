const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const author = 'Edison Alfaro'

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hola Mundo')
})
server.listen(port,hostname,()=>{
    console.log(`${author}`)
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}`)
})