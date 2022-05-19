import React, {useState, useEffect} from 'react'       
import './style.css'
import {Card, CardProps} from '../../components/Card'
              //importo a CardProps do Card

type ProfileResponse = { //tipando resposta da API
  name: string
  avatar_url: string
}

type User ={ //for setUser()
  name: string
  avatar: string
}

export function Home() {
 //conceitos de estado 
  const [studentName, setstudentName] = useState('')
  const [students, setStudents] = useState<CardProps[]>([]) //utilizo o cardpross,com <>, como é um array add []
  const [user,setUser] = useState<User>({} as User) //eu informo q é do tipo User inicio como um obj vazio como(as) User, ao inves de inicializar com vazio name:'' e avatar:'', pois se tivesse 30 propriedades dentro de user iria ficar gigantesco

  function handleAddStudent(){ 
    const newStudent = { 
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setStudents(prevState => [...prevState, newStudent]) 
  }

  useEffect(() =>{
    async function fetchData(){
      const response = await fetch('https://api.github.com/users/beasou')
      const data = await response.json() as ProfileResponse
      
      setUser({ //pelo Profile Response não ser compativel com setUser, vamos fazer uma outra tipagem
        name:data.name,
        avatar: data.avatar_url,
      })
    }
    fetchData()
  },[])

  return (
    <div className='container'> 
    <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil"/>
      </div>

    </header>
                 
      <input  type="text" 
              placeholder="Digite o nome..."
              onChange={event => setstudentName(event.target.value)}
      />
      
      <button type="button" onClick={handleAddStudent}>
        Add+
      </button>
     
      { 
        students.map(student => (
          <Card
            key={student.time} //como foi colocado como vetor acima o erro aqui some, disponibilizando as 2 propriedades .nome e .time
            name={student.name} 
            time={student.time}
          />
        ))
      }
    </div> 

  )
}
