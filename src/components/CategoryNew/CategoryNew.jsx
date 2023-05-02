import { useState } from "react"
import classes from "./CategoryNew.module.css"
import { useDispatch, useSelector } from "react-redux"
import { toaster } from "../../utils/toast";
import { useNavigate } from "react-router-dom";

const CatoryNew = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth)

    const isAuthenticationRequired = () => {
        if (!auth.isLogin) {
            toaster("info", "login/signup to continue")
            dispatch({ type: "SET_LOGIN_REQUIRED" })
            return true
        }

        return false
    }

    const showProducts = (category) => {
        if (isAuthenticationRequired()) {
            dispatch({ type: "SET_SELECTED_CATEGORY", payload: { category } })
            return true
        }
        dispatch({ type: "SET_SELECTED_CATEGORY", payload: { category } })
        navigate("/home")
    }

    return (
        <div className={classes.category} onClick={() => showProducts(props.category.name)} >
            <img
                src={props.category.image}
                alt={props.category.name} />
            <span className={classes.category_name}>{props.category.name}</span>
        </div>
    )
}

export default CatoryNew;