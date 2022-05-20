const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {

    })
    .catch(error => console.error(error))
}

const newUser = {
    name: "Bea Sou",
    avatar: "https://avatars.githubusercontent.com/u/8356862?v=4",
    city: "Rio de Janeiro "
}

//addNewUser(newUser)
getUsers()