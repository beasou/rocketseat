// 1. Declare uma váriavel de nome weight
    
    var weight;

//--------------------------------------------------------------
// 2. Que tipo de dado é a variavel acima?

    console.log(typeof weight); //undefined

//--------------------------------------------------------------
/*
   3. Declare uma váriavel e atribua valores para cada um dos dados:
    - name: String
    - age: Number (interger)
    - stars: Number (float)
    - isSubscribed: Boolean 
*/

    let name = "Bea";
    let age = 26;
    let stars = 0.2;
    let isSubscribed = false;

//--------------------------------------------------------------
/*
   4. A variavel student abaixo é de que tipo de dados?
   4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.
   4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        ATENÇÃO, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/
    let student = {
        name: "Bea",
        age: 26,
        weight: 90,
        isSubscribed: false,
    }
    console.log(typeof student); 
    console.log(student.name+" de idade "+student.age+" pesa "+student.weight+" KG.")

//---------------------------------------------------------------------------
/*
    5. Declare uma váriavel do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.
*/

     let students = [];

//---------------------------------------------------------------------------
/*
    6. Retribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir nele o array)
*/
    students= [student];
    console.log(students);

//---------------------------------------------------------------------------
/*
    7. Coloque no console o valor da posição zero do array acima
*/

    console.log(students[0]);

//---------------------------------------------------------------------------
/*
    8. Crie um novo student e coloque na posição 1 do array students
*/
    const student1 = {
        name: "Joao",
        age: 28,
        weight: 70,
        isSubscribed: false,
    }
    students[1]= [student1];

    console.log(students);

 //---------------------------------------------------------------------------
 /*
    9. Sem rodar o código responda quel é a resposta do código a baixo e porque?
    Após sua resposta, rode o código e veja se acertou.

    console.log(a)
    var a = 1;
 */

    /*R: undefined, pois a variavel foi declarada após a execução do console log, como a variavel é do tipo var(global), isso é possivel, pois o JS realiza um processo denominado hoisting =>elevação, no qual ele "coloca" o var a =1; acima do console log, isso não é possivel com o let e const, por exemplo.*/

    console.log(a)
    var a = 1;
