/*
  DECLARATION ASSIGNMENT VAR
    Para declarar uma variável podemos usar var, let e const, 
    e para atribuírmos valores à essa variável utilizamos o caractere =, 
    e para vermos o tipo dessa variável podemos utilizar a função 
    console.log(typeof variavel).
*/
//--------------------------------------------------------------------------
/*
    VARIAVEIS -->
        -nomes simbólicos para recebr algum valor
        -atalhos de codigo
        -identificadores 
    3 palavras reservadas para cirar um variavel 
        -let
        -var
        -const -> não pode mudar seu válor durante a execução
*/

//  var
    var clima = "Quente";
    clima = "Frio"; //retribuindo o valor 
    console.log(clima);

    const clima1 = "Quente"; 
    clima1 = "Frio"; //erro pois não pode retrubir valor a const
    console.log(clima);

//--------------------------------------------------------------------------

/* 
    AGRUPANDO DECLARAÇÕES --> É possível agrupar diversas declarações de variáveis 
    em JavaScript usando let, const ou var e colocando uma vírgula entre os nomes 
    das variáveis a serem criadas, por exemplo: let name, age, isStudent. 
    Para mostrar mais de uma variável no console.log também é possível usando vírgula, 
    por exemplo: console.log(name, age, isStudent).
*/
    let age, isHuman;

    age = 18;
    isHuman = true;

    console.log (age, isHuman);//Multiplos argumentos na função

//--------------------------------------------------------------------------
/*
    CONCATENANDO E INTERPOLANDO VARIÁVEIS --> É possível concatenar strings com 
    o operador +, por exemplo: console.log('o ' + name + ' tem ' + age + ' anos.') 
    desta maneira as variáveis serão convertidas em texto e o que será mostrado 
    será um texto com o nome e a idade que foram estabelecidas no código. 
    Uma outra maneira de escrever um texto com variáveis é por meio da interpolação 
    com template literals, usando crase para o texto e ${} para denotar uma variável, 
    por exemplo console.log(O ${name} tem ${age} anos.) o resultado deste comando 
    será o mesmo texto do anterior.
*/
    //concatenando valores
   console.log('Tem' + age+ 'anos');

    //interpolando valores com templates literal or template string
    console.log(`Tem ${age} anos.`)