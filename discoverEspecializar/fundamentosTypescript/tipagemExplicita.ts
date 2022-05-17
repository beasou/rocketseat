//Tipagem Explícita

function showTicket(user:string, ticket:number){ //declaro de forma explícita(deixando claro) o tipo de variavel
    console.log(`olá ${user ?? 'Usuário padrão'}. Seu número de bilhete é ${ticket}`)
}

showTicket(null,123)