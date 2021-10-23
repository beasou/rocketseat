/*
    Functions -->Funções são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à cer executado } e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código.
*/

// criar um aplicativo de frases motivacionais


//declaration - declaração da função (function statement)
function createPhrases(){ 
    console.log("Estudar é muito bom");
    console.log("Paciência e persistência");
    console.log("Revisão é mãe do aprensizado");
}

// executar a função, rodar, chamar, invocar 
// execute, run, call, invokes,
    createPhrases(); 

/*
    Argumentos e parâmetros --> Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.
*/
            //função anonima -> function expression/anonymous
    const sum = function( number1,number2/*parametros da função*/){
        console.log(number1+number2);
    }

    sum(2,3) // arguments - argumentos
    sum(20,40)


/* 
    Retornando valores dentro da função --> Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.
*/    

    const soma = function(numero1,numero2){
        total = numero1 + numero2;
        return total;
    }

    let numero1 = 34;
    let numero2 = 25;

    console.log(`o numero 1 é ${numero1}`)
    console.log(`o numero 2 é ${numero2}`)

    console.log(`a soma é ${soma(numero1,numero2)}`)
    console.log(total)

/* ARROW FUNCTION -->
    Também podemos escrever funções expression de uma maneira mais compacta, desta maneira: () => { código a ser executado }, chamada de Arrow Function.
*/

    const sayMyName = () => {
        console.log('Bea')
    }

    sayMyName()

/*
    CALLBACK FUNCTION --> Uma callback function é uma função que está sendo passada para outra função como parâmetro.
*/

    function sayMyLastName(name){
        console.log('antes de executar a função call back')
        name()
        console.log('depois de executar a callback')
    }

    sayMyLastName(
        () => { 
            console.log('estou em uma função')
        }
    )

/*
        FUNÇÃO CONTRUTORA --> Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

        function() constructor
         - expressão new 
         - criar um novo objeto
         - this keyboard
*/
    function Person(name) {
    	this.name = name
    	this.walk = function() {
    		return this.name + " está andando"
    	}
    }
    const mayk = new Person("Mayk")
    const joao = new Person("João")

    console.log(mayk.walk())
    console.log(joao.walk())


    let name1 = new String("Bea")
    console.log(name1)

    let date = new Date("2021-10-23")
    console.log(date)