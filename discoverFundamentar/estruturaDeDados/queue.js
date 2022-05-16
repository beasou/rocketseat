// METODOS FUNDAMENTÁIS
//      enqueue():adicionar um elemento ao final da fila
//      dequeue():remover o primeiro elemento a entrar na fila

//  outros métodos poderão ser implementados como size(), para mostrar o tamanho da fila ou front() para pegar o primeiro elemento da fila, dentre outros.

// PASSO 1: Modelando
class Queue{
    constructor(){
        this.data =[] //esse this sempre será a referencia do obj criado lá fora o ex fila
    }
    enqueue(item){ //o momento que o item vai entrar na fila
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue(){//o momento que o item vai sair na fila
        const item = this.data.shift() //shift() é uma funcionalidade aplicada aos array em JS, significa que ele irá tirar o primeiro a entrar na fila
        console.log(`${item} saiu da fila!`)
    }
}

// PASSO 2: Utilizando
const fila = new Queue() //new estancia o obj -> fila vai ser o obj

fila.enqueue('Mariana')
fila.enqueue('Joao')
fila.enqueue('Manoel')

fila.dequeue()
fila.dequeue()
fila.dequeue()