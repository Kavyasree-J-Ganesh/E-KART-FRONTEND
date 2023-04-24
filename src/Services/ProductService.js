import axios from "axios"

const headerConfig = {headers:{Authorization: `bearer ${localStorage.getItem("auth")}`}}

export const getProducts= async () => {
    const result = await axios.get("http://localhost:6060/api/v1/product", headerConfig)
    return result
}

export const getProduct = async (id) => {
    const result = await axios.get(`http://localhost:6060/api/v1/product/${id}`, headerConfig)
    return result
}