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
newState.set('blablabla')//com o union posso intercalar o tipo que vou usar

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