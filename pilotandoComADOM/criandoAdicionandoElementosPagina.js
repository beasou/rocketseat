//Criando e adicionando elementos na página
//createElement
const div = document.createElement('div');
div.innerText = "adicionando aqui" //criando o texto da div para ser add
//append prepend
const bod = document.querySelector('body')
bod.append(div) //add depois    
bod.prepend(div) //add antes do elemento, no caso body