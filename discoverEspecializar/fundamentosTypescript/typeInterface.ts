// Type e Interface
// QUAL É A DIFERENÇA?

//o objetivo de ambos é o mesmo, o type é mais recomendado por ser mais simples, facil de lidar com tipos primitivos, por ser mais flexivel. Interface é mais utilizado em orientação a objeto.


// EXEMPLO DE COMO FAZER UNIÃO C/ TYPE
type TUser ={
    id:number
    name:string
}

type TPayment = {
    method: string
}

type TAccount = TUser & TPayment

//---------------------------------------------------

// EXEMPLO DE COMO FAZER UNIÃO C/ TYPE
interface IUser{
    id: number
    name: string
}

interface IPayment {
    method: string
}

interface IAccount extends IUser, IPayment {}