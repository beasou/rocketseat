//uso o type pra definir que tipo a variavel é sem precisar ficar reescrevendo as mesmas propriedades em outra variavel, melhor pra reutilizar
type IdType = string | number | undefined

let userId: IdType
let adminId: IdType

//se eu tentar atribuir um tipo que não foi definido dará um erro
userId = false //erro, pois não foi passado o tipo booleano
