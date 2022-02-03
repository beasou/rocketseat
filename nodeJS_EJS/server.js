const express = require('express')
const app = express() //estanciando o express e atribuindo a variavel app

app.set("view engine", "ejs") // a ferramenta que eu vou utilizar para redenrizar o html e o ejs

//get é um metodo que esta dentro do express
app.get("/", function (req, res){ //aqui está a rota "/"->dominio sem nada na frente
    res.render("index")//a resposta é renderizar o index res=response
})

app.get("/sobre", function (req, res){
    res.render("about")
})

app.listen(8080) //função dentro do express que fica "ouvindo"
console.log("Servidor funcionando")