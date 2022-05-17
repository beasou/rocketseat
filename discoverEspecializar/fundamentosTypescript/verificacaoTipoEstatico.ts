//Verificação tipo estatico

// com typescript ira avisar que mesage não é uma função
const message = "hello world"
message() //message is not a function


const user = {
    name:"bea",
    email:'bea@bea.com'
}
console.log(user.location)//location não existe, ts será notificado


function sum (a:number, b:number){
    return a + b
}

sum.toLowerCase() //essa propriedade é do tipo string