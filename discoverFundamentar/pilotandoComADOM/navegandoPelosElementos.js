//Navegando pelos elementos
//parentNode parentElement (pais)
const body = document.querySelector('body')
console.log(body.parentNode)


//Pegando elementos filhos
//childNodes children
const el = document.querySelector('body')
console.log(el.childNodes) //text que aparece são espaços
console.log(el.children) //sem os espaços o htmlcollection não leva em conta

//firstChild firstElementChild
console.log(el.firstElementChild) //firstChild leva em consideração o espaço em vazio e o firstElementChild não.

//lastChild lastElementChild
console.log(el.lastElementChild)


//Navegando pelos elementos irmão
//nextSibling nextElementSibling
const elem = document.querySelector('p')
console.log(elem.nextSibling) //considera texto
console.log(elem.nextElementSibling)//não considera texto

//previousSibling previousElementSibling
console.log(elem.previousSibling)
console.log(elem.previousElementSibling)