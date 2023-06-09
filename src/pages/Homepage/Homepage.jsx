import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import "../Homepage/Homepage.css"
import { getProducts, searchText } from "../../Services/ProductService";
import Product from "../../components/Product/Product";
import { getCart } from "../../Services/cartService";
import Category from "../../components/Category/Catagory";
import { useDispatch, useSelector } from "react-redux";


const Homepage = props => {
    const product = useSelector(state=> state.product)
    const dispatch = useDispatch();

    useEffect(() => {
        getProductList();
        getCartItems()
    }, [])

    async function getProductList() {
        try {
            const products = await getProducts(product.selectedCategory, props.search);
            dispatch({ type: "SET_PRODUCTS", payload: products.data })
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getProductList()
    }, [product.searchText, product.selectedCategory])



    async function getCartItems(){
        try{
            const cart = await getCart();
            dispatch({type:"SET_CART", payload: cart.data.data})
        }catch (e){
          console.log(e)
        }
    }

    async function getProductList() {
        try {
            const products = await getProducts(product.selectedCategory,product.searchText);
            dispatch({type:"SET_PRODUCTS", payload: products.data})
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="homepage">
            <Category/>
            <div className="homepage_products">
                 {product?.products?.map((product, index)=> <React.Fragment key={index}><Product product={product}/></React.Fragment>)}
            </div>
        </div>
    )
}


export default Homepage;