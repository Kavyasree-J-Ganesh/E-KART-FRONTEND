import React, { useState } from "react";
import { getCategories } from "../../Services/ProductService";
import classes from "./HomeNew.module.css"
import CatoryNew from "../../components/CategoryNew/CategoryNew";



const HomeNew = () => {
    const [categories, setCategories] = useState([]);

    const getCategoryList =  async ()=>{
      const result = await getCategories();
      setCategories(result.data.data)
    }

    useState(()=>{
      getCategoryList()
    }, [])

    return (
        <div className={classes.cart_list}>
           {categories.map(category=> <CatoryNew category={category} />)}
        </div>
    )
}

export default HomeNew