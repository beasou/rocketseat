/* 
    PROTOTYPE --> O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.

    - prototype-based Language
    - prototype chained
    - __proto__
*/

//------------------------------------------------------------------------------

/* 
    Type conversion (typecasting) vs Type coersion -->Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.

    - alteração de um tipo de dado para outro tipo
*/

    console.log("9" + 5) //coersion, ele forçou e concatenou

    console.log(Number("9") + 5) //conversion, transformei de string para numero

//--------------------------------------------------------------------------------
/*
    Strings em números --> É possível transformar números em formato de string através do método Number() e números em formato number em string usando o método String().

    -manipulando strings e números
    -transformar string em número e número em string
*/

    let string = '123'
    console.log(Number(string))

    let number = 321
    console.log(String(number))

    
//------------------------------------------------------------------------------
/*
    Contando caracteres e digitos -->Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.
*/

    let word = 'paralelepipedo'
    console.log(word.length)

    let numb = 12345
    console.log(String(numb).length)

//------------------------------------------------------------------------------
/*
    Casas decimais --> Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.
*/

    let numbe = 321398434.427434897
    console.log(numbe.toFixed(2))//numero de casas que quero imprimir
    console.log(numbe.toFixed(2).replace(".",",")) //colocar virgula, porem o retorno desse dado é uma string

//------------------------------------------------------------------------------
/*
    Maiúsculas e minúsculas --> Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.
*/
    let word1 = 'programar é muito bom!'
     console.log(word1.toUpperCase())
     console.log(word1.toLowerCase())

//------------------------------------------------------------------------------
/*
    Separando strings --> Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

    -separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois diso, tranforme o array em um texto e onde eram espaços, coloque _
*/

    let phrase = "Eu vou ser uma ótima programadora!"
    let myArray = phrase.split(" ")
    let phaseWithUnderscore = myArray.join("_")
    console.log(phaseWithUnderscore.toLowerCase())

//------------------------------------------------------------------------------
/*
    Encontrando palavras em frases --> Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

    -verificar se tem a palavra programadora
*/
    console.log(phrase.includes("programadora"))//case sensitive

//------------------------------------------------------------------------------
/*
    Criando array com construtor --> Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").

*/

    let myArray1 = new Array('a','b','c')
    console.log(myArray1)

//-----------------------------------------------------------------------
/* 
    Elementos do Array --> Para contar a quantidade de elementos em um array pode-se usar o método length.
*/

    console.log([
            "a",
             {type:"array"},
             function(){return "alo"},
    ].length)

//------------------------------------------------------------------------
/*
    Strings para arrays --> Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer").
*/

    let palavra = "manipulação"
    console.log(Array.from(palavra))

//------------------------------------------------------------------------------
/*
    Manipulando arrays --> Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.
*/
    let techs = ["html", "css", "js"]
    console.log(techs)

    //-adicionar um item no fim
    techs.push("node.js")
    console.log(techs)

    //-add no começo
    techs.unshift("sql")
    console.log(techs)

    //-remover do fim 
    techs.pop()
    console.log(techs)

    //-remover do começo
    techs.shift()
    console.log(techs)

    //-pegar somente alguns elementos em qualquer posição do array
    console.log(techs.slice(1,3)) //posição de remoção, numero de elementos

    //-remover 1 ou mais itens em qualquer posição do array
    techs.splice(1,1)
    console.log(techs)

    //-encontrar a posição de um elemento no array
    let index = techs.indexOf('js') //buscar
    techs.splice(index,1) //remover
    console.log(techs)