const express = require('express')
const {request, response} = require("express");
const app = express()
/*Перехватчики внутренних адресов в адресной строке*/
app.get('/', (request, response)=>{
    response
        .writeHead(200, {'Content-Type':'text/plain; charset=UTF-8'})
        .end(`hello world ${new Date()}`)
})
app.get('/person',(request, response)=>{
    response
        .writeHead(200, {'Content-Type':'application/json; charset=UTF-8'})
        .end(JSON.stringify({fn:'Ivan', ln:'Ivanov'}))
})
app.get('/exit', (request, response)=>{
    process.exit(-1)
})

const listener = app.listen(3001, `localhost`, (p)=>{
    console.log(`Server ready. Address port ${p}`)
})