import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

const apiGitHub = "https://api.github.com/users/beasou/repos"

interface Repository{
    name: string
    description: string
    html_url: string
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]) //<> => generic, <o tipo q eu qro armazenar>, no caso um repositório, se eu colocar apenas <Repository>, irá armazenar o repositório, como o repositório é uma lista de repositório eu adiciono [] 
    
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