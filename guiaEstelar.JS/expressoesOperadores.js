/*
    EXPRESSÕES E OPERADORES -->
    Expresssões são bem tranquilas, porque expressões são qualquer linha de código que resolve alguma coisa no JavaScript, um exemplo é a expressão:
    let number
    sso é uma expressão, já que estamos declarando uma váriavel, nesse caso com o valor de undefined.

    Toda expressão do Javascript pode ou não terminar com ; (ponto e vírgula), o final de uma expressão é facultativa, mas em algumas outras linguagens é obrigatório o uso de ; (ponto e vírgula).

    Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável, é um dos poucos casos onde faz falta, e é em um cenário como o seguinte:
    let number = 1

    (function(){
      console.log('alo')
    )()
    
    -Expressions
    -Operadores
        Binary
        Unary
        Ternary

    
*/
    let num = 1; // sem essa virgula ele entende como nome da função, então nesse caso é melhor colocar uma virgula

    (function(){
    console.log('alo')
    })()

//Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, passar uma função como argumento, e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.

//Veremos também sobre operadores, nesse exemplo temos o binário, unário e ternário.

    /* unário */
    let num1 = 1
    console.log(++num1)//incremendo ou decremento "--"

    /* binário */
    let num2 = 1
    console.log(num2 + 4)

    /* ternário */
    console.log(false ? 'alo' : 'nada')

//Como você pode observar, temos no unário um elemento, no binário dois elementos e no ternário três elementos.

//------------------------------------------------------------
/* 
    NEW --> A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

    -left-hand-side expression 
    -criar um novo objeto
*/

    let nome = new String('Bea')
    nome.sobNome = "Sou"
    let idade = new Number(26)
    console.log(nome, idade)
    console.log(nome.sobNome,idade)

//------------------------------------------------------------
/*
    OPERADORES UNÁRIOS
     -typeof
     -delete
*/

    console.log(typeof nome)

    const pessoa ={
        nome: "Bea", 
        idade: 26,
    }
    console.log (pessoa)
    delete pessoa.idade
    console.log (pessoa)

//------------------------------------------------------------
/*
    OPERADORES ARITMÉTICOS 
*/

    //multiplicação *
    console.log(2.3*5)

    //divisão /
    console.log(2.3/5)

    //soma +
    console.log(2.3+5)

    //subtração -
    console.log(2.3-5)

    //resto da divisão %
    console.log(2.3 % 5)
    let remainder = 11 % 3
    console.log(remainder)

    //incremento ++
    let increment = 0
    increment++
    console.log(increment)

    //decremento --
    let decrement = 0
    decrement--
    console.log(decrement)

    //exponencial **
    console.log(3**3)

//------------------------------------------------------------
/*
    Grouping operator () operador que agrupa expressões 
*/

    let total = 2 + 3 * 5 //precedencia, multiplicação depois soma
    console.log(total)

    total = (2 + 3) * 5 //agora a soma é realizada antes
    console.log(total)
       

//------------------------------------------------------------
/*
    Operadores de comparação
     Irá comparar valores e retornar um Boolean como resposta à comparação
*/
    let one = 1
    let two = 2

    // == igual a 
    console.log(two == 1)
    console.log(one == "1")

    // != diferente de
    console.log(one != two)
    console.log(one != 1)
    console.log(one != "1")

    // === estritamente igual a 
    console.log(one === "1")
    console.log(one === 1) 

    // !== estritamente diferente de
    console.log(two !== "2")
    console.log(two !== 2)

//----------------------------------------------------------------
/*        
    Operadores de comparação maior e menor (igual)
*/

    // > maior que
    console.log(one > two)

    // >= maior igual a
    console.log(one >= 1)
    console.log(two >= 1)

    // < menor que 
    console.log(one < two)

    // <= menor igual a
    console.log(one <= two)
    console.log(one <= 1)
    console.log(one <= 0)

