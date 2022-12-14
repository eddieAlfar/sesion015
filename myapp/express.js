const express = require('express')
const app = express()
const port = 8080
let a=5,b=7
app.get('/',(req,res)=>{
    res.send('Helo World!')
})
app.get('/user',(req,res)=>{
    res.send('Estamos en User')
})
app.listen(port,()=>{
    console.log(`La operacion matematica es: ${a}+${b}=${a+b}`)
    console.log(`El servidor se sta ejecutando en http://localhost:${port}`)
})
