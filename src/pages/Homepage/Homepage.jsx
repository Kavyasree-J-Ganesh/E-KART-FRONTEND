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
    const [productList, setProductList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getProductList();
        getCartItems()
    }, [])

    useEffect(() => {
        setProductList(product?.products)
    }, [product])

    useEffect(() => {
        if (props.search) {
            searchText(props.search).then(res => {
                setProductList(res.data.data)
            }).catch(err => console.error("error :",err))
        }
    }, [props])



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
            const products = await getProducts(product.selectedCategory);
            dispatch({type:"SET_PRODUCTS", payload: products.data})
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="homepage">
            <Category/>
            <div className="homepage_products">
                 {productList?.map((product, index)=> <React.Fragment key={index}><Product product={product}/></React.Fragment>)}
            </div>
        </div>
    )
}


export default Homepage;