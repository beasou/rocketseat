//criando tipagem para um obj
type Point ={
    x: number
    y: number
}

function printCoord(points: Point){
    console.log(`o eixo x é: ${points.x}`)
    console.log(`o eixo y é: ${points.y}`)
}

printCoord({x:101, y:50})