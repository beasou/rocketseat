import './styles.css';

export type CardProps ={ //crio uma tipagem para corrigir o erro do props não ter tipagem
    name: string
    time: string
}

export function Card(props: CardProps){ //add a tipagem em props 
//exporto essa função para ser utilizada na Home
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}
