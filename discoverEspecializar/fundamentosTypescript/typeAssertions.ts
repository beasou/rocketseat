type UserResponse ={
    id: number
    name: string
    avatar: string
}

let userResponse = {} as UserResponse // esse obj temq ue ser como o UserResponse

userResponse.avatar

//é como se fosse uma converção, dizendo q 1 obj é como aquele pre definido em type, esse método é utilizado bastante em consumo de API, dizer para o type script que o esse é o padrão passado, no ex obj.