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

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response =>{
        const {name, city, id, avatar} = response.data
        userName.textContent = name
        userCity.textContent = city
        userId.textContent = id
        userAvatar.src = avatar

    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const newUser = {
    name: "Bea Sou",
    avatar: "https://avatars.githubusercontent.com/u/8356862?v=4",
    city: "Rio de Janeiro "
}

const userUpdated = {
    name: "Bea Sou",
    avatar: "https://avatars.githubusercontent.com/u/8356862?v=4",
    city: "Rio de Janeiro "
}

updateUser(2, userUpdated)
getUser(2)
//addNewUser(newUser)
getUsers()