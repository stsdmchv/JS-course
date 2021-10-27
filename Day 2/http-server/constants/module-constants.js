const YES = "Да"
const NO = "Нет"

let time=""

const Person = {
    fn:"Ivan",
    ln:"Ivanov",
    age:40,
    gender:"M"
}

function sum(a,b){
    return a+b
}

time = "Время загрузки " + new Date()

module.exports={YES, NO, sum, Person, time}