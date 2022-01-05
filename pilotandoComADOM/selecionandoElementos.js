//getElementById()
const element = document.getElementById('blog-title')
console.log(element)

//getElementsByClassName()
const element = document.getElementsByClassName('blog-text')
console.log(element)

//getElementsByTagName()
const element = document.getElementsByTagName('body')
console.log(element)

//querySelector() (pesquisa pelo seletor o primeiro que acha na pag)
const element = document.querySelector('p')
console.log(element)

//querySelectorAll (td que achar pelo seletor semelhante ao css)
const elements = document.querySelectorAll('#blog-text')

elements.forEach(el => console.log(el))