//  FUNÇÃO IMPURA 
//  EXEMPLO 1: está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(redius){
    return Math.PI * (radius + radius)
}

//  EXEMPLO 2: está alterando uma dado externo
let person ={
    name: 'Rafael Camarda',
    age: 'jovem'
}

function changeName(name){
    person.name = name
}

//  FUNÇÃO PURA
//  EXEMPLO 1
const calculateCircumference = function (pi, radius){
    return pi * (radius + radius)
}
//  com arrow function
const calculateCircumference = (pi,radius) => pi * (radius + radius)

//  EXEMPLO 2
const changePersonName = (person, name) => ({...person, name})