//MODULOS NATIVOS
const path = require('path') //uma maneira de chamar modulos que são nativos do nodejs ou modulos que podemos criar e até mesmo instalar no node
console.log(path.basename(__filename))

//MEUS MODULOS
const myModule = require('./exports')
console.log(myModule)