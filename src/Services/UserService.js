import axios from "axios"

const signin = async (data) => {
    const result = await axios.post("http://localhost:6060/api/v1/users/login", data)
    return result
}

const signup = async (data) => {
    const result = await axios.post("http://localhost:6060/api/v1/users", data)
    return result
}



export {signin, signup}