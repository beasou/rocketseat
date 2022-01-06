//eventos

//Adicionando eventos via HTML
function print(){
    alert("Aqui")
}

//eventos de Teclado
const input =document.querySelector('input')

input.onkeyup = function() { //preciou o botão de seta pra cima vai disparar o alert
    alert('rodei')
}

//Adicionando eventos via JS
const h1 = document.querySelector('h1')

/*h1.addEventListener('mouseover', print)
function print(){
    console.log('print')
}*/

//Adicionando eventos via JS (Outro método)
h1.onmouseover = print
function print(){
    console.log('print')
}