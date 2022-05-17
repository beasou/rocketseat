function showMessages(message:string):void{ //função não aceita retorno
   return message //se eu tentar retornar vai dar erro
}
//----

// void é inferido automáticamente, a função sem retorno TS vai saber que é do tipo void. 
function showMessages1(message:string){
    console.log('oi')
}
//----

//Seu eu colocar retorno ela infere(entende) que o retorno será uma string
function showMessages2(message:string){
    return message
}   console.log(showMessages2("oi")) //retono string
    console.log(showMessages2(2)) //erro pois está esperando uma string