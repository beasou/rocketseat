//Alterando estilos

const elemen = document.querySelector('body')
//elemen.style.backgroundColor = "#F9F3D2"
console.log(elemen.style.backgroundColor)

//classList
elemen.classList.add('active', 'green')
console.log(elemen.classList)
elemen.classList.remove('active')//remove
elemen.classList.toggle('active')//pesquisa se classe existir remove, se não add