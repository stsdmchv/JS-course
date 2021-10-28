const express = require('express');
const router = express.Router();

const pool=require('../modules/db')



/* GET info page. */
router.get('/', function(request, response, next) {
  response.setHeader('Content-Type','application/json; charset=utf-8');
  pool.connect()
      .then(client=>{
        client.query('select now()', [])
        .then(data=>{
          response.send(data.rows);
        })
            .catch(err=>response.send({error:"Ошибка SQL" + err.toString()}))
            .finally(temp=>{client.release();response.end('');}) // в chunk ничего не передаем
      })
        .catch(err=>response.send('{"error":"Error on connection"}'))
      .finally(t=>console.log('End of work'));
});

module.exports = router;