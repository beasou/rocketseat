//MANIPULANDO CIONTEÚDO
// textContent

const elemento = document.querySelector('h1')
elemento.textContent += " Olá Devs!"//além de modificar podemos concatenar
console.log(elemento.textContent)

//innerText
elemento.innerText = " Olá Devs!"
console.log(elemento.innerText)

//innerHTML
elemento.innerHTML = "Olá Devs! <small>!!!</small>"
console.log(elemento.innerHTML)

//value
const element = document.querySelector('input')
console.log(element.value) //consigo pegar o valor
element.value = "Valor que eu quiser" //consigo atribuir valor
console.log(element.value) 

//manipulando atributos
const main = document.querySelector('main')
main.setAttribute('id', 'main')//add ID
const mainID = document.querySelector('#main')//pesquisei pelo ID criada "no" html
console.log(mainID)//imprimi
console.log(mainID.getAttribute('id')) //pegando apenas o atributo
main.removeAttribute('id')//removendo atributo