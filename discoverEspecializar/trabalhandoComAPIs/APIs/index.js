const express = require('express') //chamando o metodo do express e guardando na constante
const app = express() //inicializando express e guardando ele iniciado em app

app.listen('3000') //usando o metodo listen do express para ouvir a porta 3000

//executando o comando "node ." no terminal, quando o package.json tiver em main: index.js, se não tenho que rodar o node e nome do arquivo

//posso pegar esse aquivo todo e jogar em um arquivo server tbm

//middleware
app.use(express.json())//json é um metodo dentro do express

//----METODO GET --->
app.route('/').get((req, res) => res.send("Oi")) //função do express que trabalha com rotas, o primeiro arguimento é a rota q no caso é /, poderia ser /sobre. O metodo passado é o get e dentro de get eu informo o que vai acontecer o que vai ser mostrado, dentro dele é passado o req(requisição) e o res(resposta)

//outra rota ex
app.route('/sobre').get((req, res) => res.send("Rota sobre"))


//----METODO POST --->
app.route('/contato').post((req, res)=>{console.log(req.body)})//pedindo o corpo da requisição
//ao fazer a solicitação no navegador da erro pois ele não encontra o get o navegador não consegue fazer o post.
//conteudo utilçizado em o insomia