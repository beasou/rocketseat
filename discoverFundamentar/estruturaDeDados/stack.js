// METODOS FUNDAMENTAIS
//      push(): add um elemento a pilha
//      pop(): remove o elemento do top da pilha
//      peek(): obter o elemento do top da pilha

//  outros métodos poderão ser implementados como size()para mostrar o tamanho da pilha

// PASSO 1: Modelando
class Stack {
    constructor(){ //função que será executada assim que for criado o obj
        this.data =[] //podemos implementar utilizando um array, porém esse é um ex
        this.top = -1 //this é a referencia do obj
    }

    push(value){ //recebe o valor colocado dentro do data
        this.top++ //incrementar o top, estava valendo -1 agora vale 0
        this.data[this.top] = value //this data na posição 0, recebe o valor passado
        return this.data //retorna a estrutura do array
    }
    pop(){ //tirar o ultimo elemento da pilha
        if(this.top < 0) return undefined // se o top por menor que 0, n tem elemento, então retorno um undefined
        const poppedTop = this.data[this.top] //pegando o ultimo elemento (top) e atribuindo a poppedTop
        delete this.data[this.top] //deletando o ultimo (top) 
        this.top-- //decrementar para dizer que tem 1 a menos
        return poppedTop //retorna quem foi excluido
    }
    peek(){
        return this.top >= 0 ? this.data[this.top]: //vou retornar se o top for menor que 0, vou retornar o ultimo que é o que esta no topo, se não tiver retorna undefined
        undefined
    }
}

// PASSO 2: Utilizando
const stack = new Stack() //instanciando o objeto -> stack se torna um obj

// add dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

//remover
stack.pop()
console.log(stack.pop())
console.log(stack.peek())