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