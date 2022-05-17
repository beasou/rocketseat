function printUserId(id: number){ //AQUI SÓ ACEITA NUMEROS
    console.log(`O Id do usuário é: ${id}`)
}
printUserId(202)
//------

//VAMOS USAR UNION PARA ACEITAR MAIS DE 1 TIPO 
function printUserId1(id: number | string){ //usando |, definimos 2 tipos para id
    console.log(`O Id do usuário é: ${id}`)
}
printUserId1('202') //vai aceitar, pois pode ser string tbm