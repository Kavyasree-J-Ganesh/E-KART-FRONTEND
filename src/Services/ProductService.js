import axios from "axios"


export const getProducts= async (category) => {
    const headerConfig = {
        headers: { Authorization: `bearer ${localStorage.getItem("auth")}` },
        params: {
            category
        }
    };
    const result = await axios.get("http://localhost:6060/api/v1/product", headerConfig)
    return result
}

export const getProduct = async (id) => {
    const headerConfig = {
        headers: { Authorization: `bearer ${localStorage.getItem("auth")}` },
      };
    const result = await axios.get(`http://localhost:6060/api/v1/product/${id}`, headerConfig)
    return result
}

export const getCategories = async()=>{
    const headerConfig = {
        headers: { Authorization: `bearer ${localStorage.getItem("auth")}` },
      };
    const result = await axios.get(`http://localhost:6060/api/v1/category`, headerConfig)
    return result
}

export const postProduct = async (body) => {
    const headerConfig = {
        headers: { Authorization: `bearer ${localStorage.getItem("auth")}` },
      };
    const result = await axios.post(`http://localhost:6060/api/v1/product`,body, headerConfig)
    return result
}

export const editProduct = async (id,body) => {
    const headerConfig = {
        headers: { Authorization: `bearer ${localStorage.getItem("auth")}` },
      };
    const result = await axios.put(`http://localhost:6060/api/v1/product/${id}`,body, headerConfig)
    return result
}