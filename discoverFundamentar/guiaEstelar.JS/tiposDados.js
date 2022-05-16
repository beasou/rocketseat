/*
    STRING -->O tipo de dados String consiste em uma cadeia de caracteres, 
    ou seja, textos. Para denotar string no JavaScript são usados aspas duplas 
    ( " " ), aspas simples ( ' ' ) e template literals ou template strings ( ), 
    template literals permitem textos multilinhas e expressões de linguagem 
    com os caracteres ${ }, por exemplo: console.log(A soma de duas unidades 
    é ${1+1}), já as outras não, por exemplo: console.log("Isso é um texto").

        -Cadeia de caracteres
         "" => aspas duplas
         '' => aspas simples
         `` => template literals ou template strings
*/
    console.log('"Be""A"');

    console.log(`
     
        as crases permitem Multilinhas
    
     `)

    console.log(`Bea ${1+1}`) //permite expressoes dentro da propria string

//----------------------------------------------------------------------------
/* 
    NUMBER -->No JavaScript temos 4 tipos de números, os inteiros 
    (por exemplo: 13), os reais ou float (por exemplo: 83.1), 
    o Not a Number (NaN) e o infinito (Infinity).

        33 => inteiros
        12.5 => float
        NaN => not a number
        Infinity => infinito
*/
    console.log(33); // inteiros
    console.log(12.5); //float
    console.log(12.5+33); //expresoes matematicas
    console.log(12.5+"string"); //not a number
    console.log(12.5 === Infinity); //true or false para tipo infinito

//----------------------------------------------------------------------------
/*
    BOOLEAN -->No JavaScript, um dado boolean pode ter apenas 2 valores:
     -verdadeiro (true)
     -falso (false).
*/
    console.log(true);
    console.log(false);

//----------------------------------------------------------------------------
/*
    UNDEFINED VS NULL -->No JavaScript temos o tipo de dados Undefined, 
    que representa valores indefinidos, e o tipo de dados null, 
    que são muitas vezes confundidos. A diferença dos dois é que null é considerado 
    como um objeto vazio, ou seja, algo indefinido não existe, 
    já algo null existe mas não tem valor algum.

        NULL 
         -objeto que não possuí nada dentro
         -diferente de indefinido
         -existe, porém não tem nada dentro.
        
        UNDEFINED
         -indefinido
         -algo que não existe.

*/
    console.log(null === undefined) //falso


//----------------------------------------------------------------------------
/*
    OBJECT --> O tipo de dado Object é estrutural, contendo atributos, 
    ou propriedades, e métodos, ou funcionalidades. Um objeto é denotado 
    com os caracteres { }, atributos e métodos com nome: valor . 
    Por exemplo { nome: "João", idade: 20 }.

     -objeto
     -propriedade /atributos
     -funcionalidades /metodos
     {propriedade: "valor"}
*/

console.log({
    name:"Bea",
    idade: 26,
    andar:function(){
        console.log('andar')
    }
})

//----------------------------------------------------------------------------
/*
    ARRAY --> O tipo de dados Array, ou vetor, também é estrutural, 
    e consiste em uma lista de dados agrupados, um Array é denotado com 
    os caracteres [ ] , por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] .

    Array = vetores
     -uma lista
     -agrupamento de dados
     ["Bea", 36]
*/
    console.log(["Bea",36 ,"paçoca", "chocolate-amargo", "panqueca-carne"])

//----------------------------------------------------------------------------
/*
    Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript)
    temos 9 tipos de dados organizados em 4 categorias: 
    Primitive: 
        -Primitive Value 
        -Structural 
        -Structural Primitive. 
    
    Os primitivos são: //não sofre alteração
        -String, 
        -Number, 
        -Boolean, 
        -Undefined, 
        -Symbol, 
        -BigInt. 
        
    Os estruturais são: 
        -Object 
            *array
            *map
            *set
            *date
            *...
        -Function 
        
    Além destes, temos o primitivo estrutural que consiste apenas no dado null
*/