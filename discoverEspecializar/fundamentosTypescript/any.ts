// por PADRÃO, uma variavel é do tipo any, quando vc não diz o tipo de forma explicita

let info: any //posso guarar qlqr coisa

//ex
info = [1,2,3]
info = 'Beatriz'
info = true
info = 10.50

//esse tipo pode ser um problema, pq perde a utilidade de usar tipagem

//---EXEMPLO 2
function sum(a:any,b:any){ //melhor declarar : number
    return a + b
}
console.log(sum(1,2)) //3
console.log(sum('1','2')) //12 
console.log(sum(1,'2')) //12
//VAI DA NO MESMO PROBLEMA EM USAT JS!