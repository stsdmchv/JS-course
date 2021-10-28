const axios = require('axios')
const {response} = require("express"); // пакет для выполнения запросов к БД

axios.post('http://localhost:3000/update', {empno:"7369"})
    .then(response=>console.log(response.data))
    .catch(error=>console.log('Ошибка', error))