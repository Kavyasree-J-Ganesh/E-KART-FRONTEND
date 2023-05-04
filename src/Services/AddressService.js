import axios from "axios"

const headerConfig = { headers: { Authorization: `bearer ${localStorage.getItem("auth")}` } }



export const getAddress = async () => {
    const result = await axios.get("http://localhost:6060/api/v1/address", headerConfig)
    return result
}


export const deleteAddress = async (id) => {
    const result = await axios.put(`http://localhost:6060/api/v1/address/delete/${id}`, {}, headerConfig)
    return result
}


export const createAddress = async () => {
    const result = await axios.post(`http://localhost:6060/api/v1/address`, {}, headerConfig)
    return result
}


