import React, {useState, useEffect} from 'react'
           //use state é um hook permite que criamos estado  
            //*HOOKS = funções que permite vc ligar, conectar os recursos de estado e ciclo de vida do react, a partir de componentes totalmente funcionais
import './style.css'
import {Card} from '../../components/Card'

export function Home() {
 //conceitos de estado 
  const [studentName, setstudentName] = useState()//(valor inicial)
          // o estado tem 2 elementos, onde guardar o conteudo do estado e qual é a função que atualiza esse estado
  const [students, setStudents] = useState([])
                    //a função que atualiza o estado
  const [user,setUser] = useState({name:'', avatar:''})
          // estado user que o valor padrão é um obj, que vai ter name e avatar iniciado como uma string vazia

  function handleAddStudent(){ //quando chamar essa função será criado um novo obj
    const newStudent = { //obj
      name: studentName, //o nome do estado, onde ele está amarzenado
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setStudents(prevState => [...prevState, newStudent]) //add o obj no estado set setStudents
                //substituindo o stado anterior, criando um novo vetor, sem fazer substituição 
                /* ... -> spread operator, para pegar o conteúdo do estado e dispejar dentro para ficar dentro do mesmo vetor ex: 
                add ['Rodrigo']
                add [['Rodrigo'], 'Amanda'] -> o vetor fica dentro do vetor, precisa ficar fora assim -> ['Rodrigo', 'Amanda'].
                */
  }
  /*
  useEffect(() => {
    //corpo do useEffect(Ações, op que eu qro que execute)
    console.log("useEffect foi chamado!")
  }, []); // se o array ficar vazio significa que não tem dependencia, será executado 1 vez ao renderizar a pagina. [students, setstudentName] => com dependencia será executado td vez que for chaamado, além do padrão que é ao ser carregado.
  */

  useEffect(() =>{
    fetch('https://api.github.com/users/beasou')
    .then(response => response.json())
    .then(data => {
      setUser({
        name:data.name,
        avatar: data.avatar_url,
      })
    })
  },[])

  return (
    // <> </> --> fragment tag vazia para embrulhar as outras q não podem sem exibidas sem um pai - entregues em um unico pacote
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
              onChange={event => setstudentName (event.target.value)}
      />
      
      <button type="button" onClick={handleAddStudent}>
        Add+
      </button>

     
      { // chave dentro do retorno é para usar o conteúdo de uma variavel
        students.map(student => (
          <Card
            key={student.time} //chave tem que ser unica, pode ser id, recomendado quando se tem componentes que são gerados a partir de uma estrutura de repetição.
            name={student.name} 
            time={student.time}
          />
        ))
      }
    </div> 

  )
}

/* Outra forma de exportar -->
      export default Home
   <-- invés de export antes da função
*/

/*
  <Card /> componentização, reaproveitar o componente quantas vezes quiser
*/