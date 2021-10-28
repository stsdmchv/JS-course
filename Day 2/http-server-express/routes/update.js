const express = require('express');
const router = express.Router();

const pool=require('../modules/db')

/* POST. Edit salary of employer */
router.post('/', async (request, response, next)=> {
  response.setHeader('Content-Type','application/json; charset=utf-8');
  const client = await pool.connect();
  const parameters = request.body.empno;
  console.log(parameters);
  try{
    await client.query('BEGIN');
    const cursor = await client.query(`update scott.emp set sal=sal+1 where empno = $1`, [parameters]);
    await client.query('COMMIT');
  }
  catch (e){
    await client.query('ROLLBACK');
    response.send({error:e.toString()});
  }
  finally{
    client.release();
    response.end('');
  }
});

module.exports = router;