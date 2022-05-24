import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

const apiGitHub = "https://api.github.com/users/beasou/repos"

export function RepositoryList(){
    const [repositories, setRepositories] = useState([])
    
    useEffect(() => {
        fetch(apiGitHub)
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return(
        <section className="repositoryList">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository =>{
                   return <RepositoryItem key={repository.name} repository = {repository}/>
                })}
            </ul>
        </section>
    )
}