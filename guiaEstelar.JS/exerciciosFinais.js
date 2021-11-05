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
    let gastoFamiliar = {
        receitas:[100, 20, 20, 30],
        despesas:[30, 60, 80, 90]
    }
    function somaTotal(array){
        let total = 0;
        for(let valor of array){
            total += valor
        }
        return total
    }
    function saldo(){
        const saldoReceitas = somaTotal(gastoFamiliar.receitas)
        console.log("Receitas:" + saldoReceitas +" R$")
        const saldoDespesas = somaTotal(gastoFamiliar.despesas)
        console.log("Despesas:" + saldoDespesas +" R$")

        const total = saldoReceitas - saldoDespesas

        if(total >= 0){
            console.log("Saldo Positivo:" + total.toFixed(2)+" R$")
        }else{
            console.log("Saldo Negativo: " + total.toFixed(2)+" R$")
        }
    }
    saldo()
//---------------------------------------------------------------------------

/*
    Celsius em Fahrenheit
        Crie uma função que receba uma string em Celsius ou Fahrenheit e faça a transformação de uma unidade para outra 

        C = (F - 32) * 5/9
        F = C * 9/5 + 32
            
*/
    function grau(valor){
        const verificaCelsius = valor.toUpperCase().includes("C")
        const verificaFahrenheit = valor.toUpperCase().includes("F"); 

        //fluxo de erro
        if(!verificaCelsius && !verificaFahrenheit){
            throw new Error('Grau não identificado')
        }
    
        //fluxo ideal F -> C
        let valorAtualizado = Number(valor.toUpperCase().replace("F", ""));
        let formula = (fahrenheit) => (fahrenheit - 32) * 5/9 //formula do fahrenheit para celsius
        let grau = "°C"

        //fluxo alternativo C -> F
        if(verificaCelsius){
        valorAtualizado = Number(valor.toUpperCase().replace("C", ""));
        formula = celsius =>  celsius * 9/5 + 32 //formula do celsius para fahrenheit 
        grau ="°F"
        }

        return formula(valorAtualizado) + grau
    }

    try{
        console.log(grau("86f"))
        console.log(grau("30c"))
        console.log(grau("30z"))
    } catch(error){
        console.log(error.message)
    }


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
            books:[
                {
                    title: "Os segredos da mente milionária",
                    author: "T. Harv Eker",
                },
                {
                    title: "O homem mais rico da Babilônia",
                    author: "George S. Clason",
                },
                {
                    title: "Pai rico, pai pobre",
                    author: "Robert T. Kiyosaki e Sharon L. Lechter",
                },

            ],
        },
        {
            category:'Inteligência Emocional',
            books:[
                {
                    title: "Você é Insubstituível",
                    author: "Augusto Cury",
                },
                {
                    title: "Ansiedade - Como enfrentar o mal do século",
                    author: "Augusto Cury",
                },
                {
                    title: "Os 7 hábitos das pessoas altamente eficazes",
                    author: "Stephen R. Covey",
                },
            ],
        },
    ];

    const totalCategories = booksByCategory.length
    console.log('Total de Categorias:' + totalCategories)

    for(let category of booksByCategory){
        console.log('Total de livros da Categoria:', category.category + ': '+ category.books.length)
    }

    function countAuthor(){
        let authors = [];
        
        for(let category of booksByCategory){
            for(let book of category.books){
                if(authors.indexOf(book.author) == -1){
                    authors.push(book.author)
                }
            }
        }
        console.log("Total de autores:", authors.length) 
    }
    countAuthor()

    function booksOfAuthor(author){
        let books = [];
        
        for(let category of booksByCategory){
            for(let book of category.books){
                if(book.author === author){
                    books.push(book.title)
                }
            }
        }
        console.log(`Livros do ${author}: ${books.join(", ")}`) 
    }
    booksOfAuthor("Augusto Cury")
    booksOfAuthor("George S. Clason")