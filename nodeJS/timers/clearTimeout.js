// clearTimeout cancela um timeOut
const timeOut = 2000 //tempo de 2 segundo, aqui medido em milissegundos
const finished = () => console.log('done!')//arrow function que imprime que foi feito

let timer = setTimeout(finished, timeOut)//recebendo a resposta do timeout e guardando no timer

clearTimeout(timer)//irá cancelar o timeout