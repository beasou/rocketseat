// setTimeout rodar uma função depois de X milissegundos

const timeOut = 2000 //tempo de 2 segundo, aqui medido em milissegundos
const finished = () => console.log('done!')//arrow function que imprime que foi feito

setTimeout(finished, timeOut)// aqui não executa a função cria uma referencia é uma função callback é chamada apos o tempo de 2 segundos (chamado de volta)

console.log('Mostrar')//isso será impresso imadiatamente, enquanto a função aguarda seu tempo de execução

//trabalho do event loop