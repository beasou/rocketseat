//-------EXEMPLO 1

function showTicket(user:string, ticket: number){
    console.log(`olá ${user}. Seu número de bilhete é ${ticket}`)
}

showTicket('bea',1234) //--SAIDA=  "olá bea. Seu número de bilhete é 1234" 

//----RESULTADO QUE COMPILA NO FINAL EM JS
/*
    "use strict";
    function showTicket(user, ticket) {
        console.log(`olá ${user}. Seu número de bilhete é ${ticket}`);
    }
    showTicket('bea', 1234);
*/

//-------EXEMPLO 2

function showTicket2(user:string | null, ticket:number){
    console.log(`olá ${user ?? 'Usuário padrão'}. Seu número de bilhete é ${ticket}`)
}
 
showTicket2(null, 123)//--SAIDA= "olá Usuário padrão. Seu número de bilhete é 123" 

//----RESULTADO QUE COMPILA NO FINAL EM JS
/*
"use strict";
function showTicket2(user, ticket) {
    console.log(`olá ${user !== null && user !== void 0 ? user : 'Usuário padrão'}. Seu número de bilhete é ${ticket}`);
}
showTicket2(null, 123);
 */