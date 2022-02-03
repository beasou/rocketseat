// clearInterval irá cancelar um setInterval registrado
const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut) //registro o intervalo
// clearInterval(interval)// cancelar o intervalo imediatamente 

setTimeout( ()=> clearInterval(interval), 3000)// função que irá cancelar o intervalo depois de 3 segundos

//IMPRIME 2, POIS ELES ENTRAM EM CONCORRENCIA JUNTOS NO TERCEIRO SEGUNDO É CANCELADA.