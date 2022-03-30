const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.status(200);
    res.send('<h1>Jenkins Lab 5</h1>')
})

app.get('/name',(req,res)=>{
    res.status(200);
    res.send('Nischith B\nE19CSE261')
})

app.listen(port, ()=>{
    console.log(`Node app listening on port ${port}`)
})

module.exports = app;