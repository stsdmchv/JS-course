/*Настройка сервера на запросы*/
const http = require("http")
const PORT=3001
const server = http.createServer((request, response)=>{
    response
        .writeHead(200, {'Content-Type':'text/plain;charset=UTF-8'})
        .end(`hello world ${new Date()}`)
})
/*-----------------------------------------*/

server.listen(PORT,'localhost') // запуск в работу
console.log('server is ready!')