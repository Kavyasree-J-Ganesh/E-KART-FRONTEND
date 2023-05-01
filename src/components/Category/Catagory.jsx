import React from "react"
import "./Catagory.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../../Services/ProductService";
import { useEffect } from "react";


const Category = props => {
    const dispatch = useDispatch()
    const {categories, product} = useSelector(state=> state)

    useEffect(()=>{
        getCategoryList()
      }, [])

      useEffect(() => {
        getProductList();
    }, [product.selectedCategory])

    const getCategoryList =  async ()=>{
        const result = await getCategories();
        
        dispatch({type: "SET_CATEGORIES", payload: result.data.data})
    }

    async function getProductList() {
        try {
            const products = await getProducts(product.selectedCategory);
            dispatch({type:"SET_PRODUCTS", payload: products.data})
        } catch (e) {
            console.log(e)
        }
    }

    const setCategory = (category) => {
        dispatch({type:"SET_SELECTED_CATEGORY", payload:{category}})
    }


    return (
        <div className="catagories" >
            <span className="catagory" onClick={()=> setCategory("")}>ALL</span>
            {categories.map(category=> <span onClick={()=> setCategory(category.name)} className="catagory">{category.name}</span>)}
        </div>
    )
}

export default Category