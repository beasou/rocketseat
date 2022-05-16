import React, {useState} from 'react'
           //use state permite que criamos estado    
import './style.css'
import {Card} from '../../components/Card'

export function Home() {
 //conceitos de estado 
  const [studentName, setstudentName] = useState()//(valor inicial)
          // o estado tem 2 elementos, onde guardar o conteudo do estado e qual é a função que atualiza esse estado
  const [students, setStudents] = useState([])

 /*let studentName=""

  function handleNameChange(name){
    
    studentName = name
  }*/
  
  return (
    // <> </> --> fragment tag vazia para embrulhar as outras q não podem sem exibidas sem um pai - entregues em um unico pacote
    <div className='container'> 
    <h1>Lista de Presença {studentName}</h1>

      <input  type="text" 
              placeholder="Digite o nome..."
              onChange={event => setstudentName (event.target.value)}
      />
      
      <button type="button">Add+</button>

     
      { // chave dentro do retorno é para usar o conteúdo de uma variavel
        students.map(student => <Card name={student.name} time={student.time}/>)
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