import axios from "axios"


export const getOrders = async () => {
    const headerConfig = { headers: { Authorization: `bearer ${localStorage.getItem("auth")}` } }
    const result = await axios.get(`http://localhost:6060/api/v1/order`, headerConfig)
    return result
}

export const createOrder = async (body) => {
    const headerConfig = { headers: { Authorization: `bearer ${localStorage.getItem("auth")}` } }
    const result = await axios.post(`http://localhost:6060/api/v1/order`, body, headerConfig)
    return result
}