//MANIPULANDO CIONTEÚDO
// textContent

const elemento = document.querySelector('h1')
elemento.textContent += " Olá Devs!"//além de modificar podemos concatenar
console.log(elemento.textContent)

//innerText
elemento.innerText = " Olá Devs!"
console.log(elemento.innerText)