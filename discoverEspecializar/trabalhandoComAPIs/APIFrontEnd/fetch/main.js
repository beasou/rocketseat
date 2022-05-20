const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(){
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data =>{
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser){
    fetch(url, {
        method:"POST", //o metodo q eu quero
        body: JSON.stringify(newUser), //o que eu vou passar para a url
        headers: {
            "Content-type":"application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser ={
    name: "Beatriz Souza",
    avatar: "https://avatars.githubusercontent.com/u/8356862?v=4",
    city:"Rio do Sul"

}

addUser(newUser)
getUsers()
getUser()