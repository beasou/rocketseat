// setInterval irá rodar uma função N vezes - depois de X milissegundos

const timeOut = 2000 //tempo de 2 segundo, aqui medido em milissegundos
const checking = () => console.log('checking!')

setInterval(checking, timeOut)// tipo um fiscal a cada 2 segundos irá enviar um checking, infinitamente

