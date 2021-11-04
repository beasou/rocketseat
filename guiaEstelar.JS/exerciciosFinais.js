//---------------------------------------------------------------------------

// SEGUNDA PARTE DOS EXERCICIOS- EXERCICIOS FINAIS 

//---------------------------------------------------------------------------

/*
    Transformar notas escolares
        Crie um algoritmo que tranforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C
            - de 90 para cima = A
            - entre 80 - 89   = B
            - entre 70 - 79   = C
            - entre 60 - 69   = D
            - menor de 60     = F

*/
    function media(notaFinal){
       if(notaFinal > 90){
        notaFinal ="Nota A"
       } else if(notaFinal >= 80 && notaFinal <= 89){
        notaFinal = "Nota B"
       }else if(notaFinal >= 70 && notaFinal <= 79){
        notaFinal = "Nota C"
       } else if(notaFinal >= 60 && notaFinal <= 69){
        notaFinal = "Nota D"
       } else if(notaFinal < 60 && notaFinal >=0){
        notaFinal = "Nota F"
       }else{
        notaFinal = "Nota invalida"
       }
       return notaFinal
    }
    console.log(media(101))
    console.log(media(-1))
    console.log(media(0))
    console.log(media(1))
    console.log(media(45))
    console.log(media(60))
    console.log(media(61))
    console.log(media(75))
    console.log(media(85))
    console.log(media(95))

//---------------------------------------------------------------------------
/*
    Sistema de gastos familiar
        Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
            - receitas []
            - despesas []
        Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
            
*/

//---------------------------------------------------------------------------
/*
    Sistema de gastos familiar
        Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
            - receitas []
            - despesas []
        Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
            
*/

//---------------------------------------------------------------------------

/*
    Celsius em Fahrenheit
        Crie uma função que receba uma string em Celsius ou Fahrenheit e faça a transformação de uma unidade para outra 

        C = (F - 32) * 5/9
        F = C * 9/5 + 32
            
*/

//---------------------------------------------------------------------------
/*
    Buscando e contando dados em Arrays
        Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios
            -contar o número de categorias e o número de livros em cada categorias 
            - contar o numero de autores 
            - mostrar livros do autore Augusto Cury
            - transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/
const booksByCategory = [
    {
        category:'Riqueza',
        books:[],
    },
    {
        category:'Inteligência Emocional',
        books:[],
    },
]