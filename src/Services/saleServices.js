import axios from "axios";

export const getSaleRepoprt = async (category) => {
    const headerConfig = {
        headers: { Authorization: `bearer ${localStorage.getItem("auth")}` },
        params: {
            category
        }
    };
    const result = await axios.get("http://localhost:6060/api/v1/cart/cart_orders_analysis", headerConfig)
    return result
}

export const getTopSelledProducts = async (category) => {
    const headerConfig = {
        headers: { Authorization: `bearer ${localStorage.getItem("auth")}` },
        params: {
            category
        }
    };
    const result = await axios.get("http://localhost:6060/api/v1/cart/top_selled_products", headerConfig)
    return result
}