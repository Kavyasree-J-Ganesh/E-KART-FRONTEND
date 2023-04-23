import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import "../Homepage/Homepage.css"
import { getProducts } from "../../Services/ProductService";
import Product from "../../components/Product/Product";


const Homepage = props => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProductList();
    }, [])

    async function getProductList() {
        try {
            const products = await getProducts();
            console.log(products.data)
            setProductList(products.data)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="homepage">
            <Header />
            <div className="homepage_products">
                 {productList.map(product=> <Product product={product}/>)}
            </div>
        </div>
    )
}


export default Homepage;