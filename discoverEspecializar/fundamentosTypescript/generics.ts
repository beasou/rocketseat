//USANDO UNION
function useState(){
    let state: number | string
    function get(){
        return state
    }
    function set(newValue: number | string){
        state = newValue
    }
    return{get,set}
}
let newState = useState()
newState.get()
newState.set('beatriz')
newState.set(123)
newState.set('blablabla')//com o union posso intercalar o tipo que vou usar, sendo mais flexivel
//--------------------------------


//USANDO O GENERIC
function useState1<T>(){ //USANDO LETRA T, MAS PODE SER QLQR UMA
                    /*
                     convenções de letra para utilizar:
                     S => state
                     T => type
                     K => key
                     V => value
                     E => element
                    */
    let state: T //agora passo que meu tipo é o T(generic)
    function get(){
        return state
    }
    function set(newValue: T){
        state = newValue
    }
    return{get,set}
}
let newState1 = useState1<string>() //a partir desse momento o generic é do tipo string
newState1.get()
newState1.set('beatriz')
newState1.set(123) // agora da erro aqui, pois estou passando um número
newState1.set('blablabla')
//-------------------


//DEFININDO COMO NUMBER OU STRING(UNION) COMO O PRIMEIRO EXEMPLO
function useState2<T extends number | string>(){ //eu posso extender como do tipo num ou string
let state: T 
function get(){
return state
}
function set(newValue: T){
state = newValue
}
return{get,set}
}
let newState2 = useState1<number>() //ele vai respeitar tipo que é declarado, então ele perde a flexibilidade da mesma forma, como no ex é um number, quando passado uma string irá dar erro
newState2.get()
newState2.set('beatriz')
newState2.set(123)
newState2.set('blablabla')


//---------------mais funcionalidades...
function useState3<T extends number | string = string>(){ //posso deixar padrão string ou number depois do sinal de = 
//...cód
}
let newState3 = useState1() //se aqui um padrão não for definido