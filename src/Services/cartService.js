import axios from "axios"



export const getCart = async () => {
    const headerConfig = { headers: { Authorization: `bearer ${localStorage.getItem("auth")}` } }
    const result = await axios.get("http://localhost:6060/api/v1/cart", headerConfig)
    return result
}

export const addToCart = async (id) => {
    const headerConfig = { headers: { Authorization: `bearer ${localStorage.getItem("auth")}` } }
    const result = await axios.post(`http://localhost:6060/api/v1/cart/${id}`, {}, headerConfig)
    return result
}

export const removeFromCart = async (id) => {
    const headerConfig = { headers: { Authorization: `bearer ${localStorage.getItem("auth")}` } }
    const result = await axios.put(`http://localhost:6060/api/v1/cart/${id}`, {}, headerConfig)
    return result
}

export const updateAddress = async () => {
    const headerConfig = { headers: { Authorization: `bearer ${localStorage.getItem("auth")}` } }
    const result = await axios.put(`http://localhost:6060/api/v1/cart/updateAddress`, {}, headerConfig)
    return result
}


