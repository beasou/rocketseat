/* 
O Scope ou Escopo determina a visibilidade de uma variável em um código, 
e para entender scope precisamos primeiramente entender block statement, 
que é o código presente dentro de chaves. O escopo do var é global, ou seja, 
uma variável declarada com var poderá ser usada em todo o código.


Escopo determina a visibilidade de alguma váriavel
   no JS

   BLOCO STATEMENT
      vamos iniciar um bloco 
      {
        -aqui dentro é um bloco e posso colocar qualquer codigo
        -aque fechamos o bloco
      }

    o bloco, também criará um escopo. Chamamos de 'block-scoped' 

*/

{
    var x= 0
        console.log (x)
}

// var é global e poderá funcionar fora de um escopo de bloco
// hoisting =>elevação
console.log ('>existe x antes do bloco?', x); //undefined, porem existe

    {
        var x = 0;
    }

console.log ('> existe x depois do bloco?', x); // existe valor = 0


//----------------------------------------------------------------

// cont e let são globais e só funionam no escopo onde foi criada

    console.log ('>existe y antes do bloco?', y); //erro, pois está fora do escopo

    {
        let y = 0;
        console.log ('>existe y ', y);      
    }

    console.log ('>existe y depois do bloco?', y); //erro, pois está fora do escopo

