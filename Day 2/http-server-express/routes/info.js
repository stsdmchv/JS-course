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
          client.release();
          response.send(data.rows);
        })
      });
});

module.exports = router;
