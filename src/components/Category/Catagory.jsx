import React from "react"
import "./Catagory.css"
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Services/ProductService";
import { useEffect } from "react";


const Category = props => {
    const dispatch = useDispatch()
    const { categories, product } = useSelector(state => state)

    useEffect(() => {
        getCategoryList()
    }, [])

    

    const getCategoryList = async () => {
        const result = await getCategories();

        dispatch({ type: "SET_CATEGORIES", payload: result.data.data })
    }

    

    const setCategory = (category) => {
        dispatch({ type: "SET_SELECTED_CATEGORY", payload: { category } })
    }


    return (
        <div className="catagories" >
            <span className={`catagory ${product.selectedCategory === "" ? "selected_category" : ""}`} onClick={() => setCategory("")}>ALL</span>
            {categories.map((category, index) => <span key={index} onClick={() => setCategory(category.name)} className={`catagory ${product.selectedCategory === category.name ? "selected_category" : ""}`}>{category.name}</span>)}
        </div>
    )
}

export default Category