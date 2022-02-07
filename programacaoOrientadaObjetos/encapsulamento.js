// ESTRUTURAL calcular area
let alt = 50
let lar = 60

function calArea(){
    return alt * lar
}

let areaE = calArea()
console.log(areaE)

// ORIENTADO A OBJETOS 
class Poligono{ //crio uma classe 
    constructor(altura, largura) {// primeira função denominada de contrutora, passado como argumentos altura e largura 
        this.altura = altura // esse obj criado abaixo vai receber a altura passada 
        this.largura = largura // esse obj vai receber a largura passada 
    }

    get area(){ //função get area vai retornar o calcular area
        return this.#calcularArea() // essa # significa que eu não quero que esse metodo seja visto fora da classe poligono
    }

    #calcularArea(){//função calcular area
        return this.altura * this.largura
    }
}

//criando obj
let poligono = new Poligono(50, 60)
console.log(poligono)
console.log(poligono.area)

//console.log(poligono.#calcularArea())//vai dar erro, pois n tem acesso fora da classe poligono