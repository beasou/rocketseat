const express = require('express') //chamando o metodo do express e guardando na constante
const app = express() //inicializando express e guardando ele iniciado em app

app.listen('3000') //usando o metodo listen do express para ouvir a porta 3000

//executando o comando "node ." no terminal, quando o package.json tiver em main: index.js, se não tenho que rodar o node e nome do arquivo

//posso pegar esse aquivo todo e jogar em um arquivo server tbm