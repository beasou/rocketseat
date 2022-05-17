//Intersecção de Tipos

type User = {
    id: number
    name: string
}

type Char = {
    nickname: string
    level: number
}

type PlayerInfo = User & Char //& uniao de tipos 
let info: PlayerInfo ={ //posso tirar um ou outro para testar que as propriedades do retirado não fica~]ao disponiveis 
    //ctrl + "barra de espaço", vai aparecer tds as propriedades de user e char
    id: 1,
    name:'Nome Sobrenome',
    nickname:'nomesobre',
    level:10
}


///---- DA PARA FAZER ASSIM TBM, definindo o objeto na hora da união
type PlayerInfo1 = User & {
    nickname:string,
    level: number
}
let info1: PlayerInfo ={ 
    id: 1,
    name:'Nome Sobrenome',
    nickname:'nomesobre',
    level:10
}