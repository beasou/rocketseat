type User ={
    name: string
    email: string
    age: number
    isAdmin?: boolean //qnd coloco ? estou dizendo que é opcional
}

let newUser: User ={
    name: 'Beatriz',
    email: 'beatriz@email.com',
    age: 27
//isAdmin: --> então eu não preciso declarar essa propriedade em cada usuario, e não daŕa erro
}