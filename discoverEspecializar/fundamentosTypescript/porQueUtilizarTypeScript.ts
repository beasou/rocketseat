//Por que utilizar TypeScript?

function sum(a,b){
    return a + b
}

console.log(sum(1,2)) //3
console.log(sum('1','2')) //12 
console.log(sum('1',2)) // o js vai concatenar, pois só soma numeros
//com o typescrip definido qual é o tipo de variavel vai me avisar. sem ele podemos descobrir em execução

//-------------------------EXEMPLOS

console.log(4 /[]) //infinity

const message = "hello world"
message() //message is not a function