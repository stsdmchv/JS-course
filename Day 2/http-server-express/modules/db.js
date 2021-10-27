const {Pool, Client} = require('pg')
const pool = new Pool({
    host:'192.168.56.200',
    database:'test',
    user:'scott',
    password:'tiger',
    max:5,
    idleTimeoutMillis: 3000,
    connectionTimeoutMillis: 2000
});

pool.on('connect',client=>console.log(client, ` online`));
pool.on('remove',client=>console.log(client, ` offline`));
module.exports = pool;