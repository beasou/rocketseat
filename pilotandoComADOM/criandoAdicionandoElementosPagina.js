//Criando e adicionando elementos na página
//createElement
const div = document.createElement('div');
div.innerText = "adicionando aqui" //criando o texto da div para ser add
//append prepend
const bod = document.querySelector('body')
bod.append(div) //add depois    
bod.prepend(div) //add antes do elemento, no caso body


//insertBefore
const script = bod.querySelector('script')
bod.insertBefore(div,script)//1ºqual é o elemento novo, 2º no de referencia add antes da tag script