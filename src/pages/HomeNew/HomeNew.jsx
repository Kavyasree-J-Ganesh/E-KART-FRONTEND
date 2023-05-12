import React, { useState } from "react";
import { getCategories } from "../../Services/ProductService";
import classes from "./HomeNew.module.css"
import CatoryNew from "../../components/CategoryNew/CategoryNew";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const HomeNew = () => {
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const getCategoryList = async () => {
    const result = await getCategories();

    dispatch({ type: "SET_CATEGORIES", payload: result.data.data })

  }

  useState(() => {
    getCategoryList()
  }, [])


  return (
    <div className={classes.cart_list}>
      {categories.map((category, index) => <CatoryNew category={category} key={index} />)}
    </div>
  )
}

export default HomeNew