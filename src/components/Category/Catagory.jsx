import React from "react"
import "./Catagory.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Services/ProductService";
import { useEffect } from "react";



const Category = props => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const categories = useSelector(state=> state.categories)

    const getCategoryList =  async ()=>{
        const result = await getCategories();
        
        dispatch({type: "SET_CATEGORIES", payload: result.data.data})
      }

    const setCategory = (category) => {
        dispatch({type:"SET_SELECTED_CATEGORY", payload:{category}})
    }
  
      useEffect(()=>{
        getCategoryList()
      }, [])


    return (
        <div className="catagories" >
            <span className="catagory" onClick={()=> setCategory("")}>ALL</span>
            {categories.map(category=> <span onClick={()=> setCategory(category.name)} className="catagory">{category.name}</span>)}
        </div>
    )
}

export default Category