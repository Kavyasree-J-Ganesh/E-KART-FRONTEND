import { useState } from "react"
import classes from "./CategoryNew.module.css"
import { useDispatch, useSelector } from "react-redux"
import { toaster } from "../../utils/toast";

const CatoryNew = (props)=>{
    const dispatch = useDispatch();
    const auth = useSelector(state=> state.auth)

    const isAuthenticationRequired = ()=>{
        if(!auth.isLogin) {
           toaster("info", "login/signup to continue")
           dispatch({type:"SET_LOGIN_REQUIRED"})
           return true
        }

        return false
    }

    const showProducts = ()=>{
        if(isAuthenticationRequired()){
            return true
        }
    }

   return (
    <div className={classes.category} onClick={showProducts}>
        <img style={{width:"100%", height:"45vh"}}
            src={props.category.image} 
            alt={props.category.name}/>
        <span className={classes.category_name}>{props.category.name}</span>
    </div>
   )
}

export default CatoryNew;