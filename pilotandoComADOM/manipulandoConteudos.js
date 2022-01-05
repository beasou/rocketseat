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

const element = document.querySelector('input')
console.log(element.value) //consigo pegar o valor
element.value = "Valor que eu quiser" //consigo atribuir valor
console.log(element.value) 