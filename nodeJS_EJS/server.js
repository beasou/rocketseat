const express = require('express')
const app = express() //estanciando o express e atribuindo a variavel app

app.set("view engine", "ejs") // a ferramenta que eu vou utilizar para redenrizar o html e o ejs

//get é um metodo que esta dentro do express
app.get("/", function (req, res){ //aqui está a rota "/"->dominio sem nada na frente
    //DENTRO DE INDEX CRIANDO UM ARRAY DE OBJETOS
    const items = [
        {
            title:"D",
            message:"esenvolver aplicações/ serviços de forma fácil"
        },
        {
            title:"E",
            message:"JS usa JavaScript para renderizar HTML"
        },
        {
            title:"M",
            message:"uito fácil de usar"
        },
        {
            title:"A",
            message:"prender com facilidade"
        },
        {
            title:"I",
            message:"nstall ejs"
        },
        {
            title:"S",
            message:"-intaxe simples"
        }
    ]
    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JS"
    
    res.render("pages/index", //a resposta é renderizar o index res=response
    { //passando o array de obj para o index -> criando obj
        qualitys: items,
        subtitle: subtitle,
    })
})

app.get("/sobre", function (req, res){
    res.render("pages/about")
})



app.listen(8080) //função dentro do express que fica "ouvindo"
console.log("Servidor funcionando")