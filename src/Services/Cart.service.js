import axios from "axios"

const headerConfig = { headers: { Authorization: `bearer ${localStorage.getItem("auth")}` } }

// add product to cart
export const addToCart = async (id) => {
    const result = await axios.get(`http://localhost:6060/api/v1/cart/${id}`, headerConfig)
    return result
}

// get all product in cart
export const getCart = async (id) => {
    const result = await axios.get(`http://localhost:6060/api/v1/cart/${id}`, headerConfig)
    return result
}

// Remove product from cart
export const removeFromCart = async (id) => {
    const result = await axios.put(`http://localhost:6060/api/v1/cart/${id}`, headerConfig)
    return result
}

