import './styles.css';

type CardProps ={
    name: string
    time: string
}

export function Card(props: CardProps){
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}

/*
    OUTRA OPÇÃO SE TRATANDO DE PROPRIEDADES
    export function Card({ name, time }){
    return(
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}
*/