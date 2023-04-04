let dbUsers = [
    {
        username: "azif",
        password: "123456",
        name: "Azif",
        email: "aziffarhan1947@gmail.com"
    },
    {
        username: "ayam",
        password: "biskutlutut",
        name: "Ayam",
        email: "ayamguring@gmail.com"
    },
    {
        username: "abu",
        password: "abudabest",
        name: "Abu",
        email: "abudabest@gmail.com"
    }
]

function login(reqUsername, reqPassword){
    let matchUser = dbUsers.find(user => user.username == reqUsername)
    if(!matchUser) return "User not found!"
    if(matchUser.password == reqPassword){
        return matchUser
    }
    else
    {
        return "Invalid password!"
    }
}

function register(reqUsername, reqPassword, reqName, reqEmail){
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail
    })
}

console.log(login("azif", "123456"))
console.log(login("utem", "password"))

register("alifhaikal", "ayamrebus", "Alif", "alif@gmail.com")

console.log(login("alifhaikal", "ayamrebus"))