// posso utilizar interface, também para criar um tipo
interface User {
    id: number; //posso colocar ? para ser opcional
    name: string;
}

let newUser: User = {
    id: 234, //se eu deixar de passar id ou name dará erro
    name: "Rodrigo"
}