//definir 
class Parafuso{ //superclasse - ABSTRATA
    constructor(){
        // esse construtor sempre irá verificar se o construtor é igual a parafuso
        if (this.constructor === Parafuso) 
        throw new Error('A classe abstrata não pode ser instânciada')
    }
    get tipo(){ //não posso utilizar esse metodo, precisa implementar ele nas classes que vão estender da classe parafuso
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso{ //classe fenda que extend tudo da classe parafuso
    constructor() { super()} //herança

    get tipo(){ //implementação do tipo, no caso fenda
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() {super()}

    get tipo(){
        return 'philips'
    }
}

class Allen extends Parafuso{} //classe extend de parafuso que nãob será implementado nada nela 

// criar e usar 
// new Parafuso() //ERRO --> 'A classe abstrata não pode ser instânciada'
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
//console.log(allen.tipo) //ERRO --> 'Método "get tipo()" precisa ser implementado'