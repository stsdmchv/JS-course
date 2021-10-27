const express = require('express')
const {request, response} = require("express");
const {Person, time} = require("./constants/module-constants");
const app = express()
/*Перехватчики внутренних адресов в адресной строке*/
app.get('/', (request, response)=>{
    response
        .writeHead(200, {'Content-Type':'text/plain; charset=UTF-8'})
        .end(`hello world, ${time}`)
})
app.get('/person',(request, response)=>{
    response
        .writeHead(200, {'Content-Type':'application/json; charset=UTF-8'})
        .end(JSON.stringify(Person))
})
app.get('/exit', (request, response)=>{
    process.exit(-1)
})

const listener = app.listen(3001, `localhost`, (p)=>{
    console.log(`Server ready.`)
})