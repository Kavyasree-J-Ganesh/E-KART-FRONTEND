import React from "react"
import "./Catagory.css"
import { useNavigate } from "react-router-dom";



const Category = props => {
    const navigate = useNavigate()

    const electronics = () => {
        navigate("/")
    }

    const homeFurniture = () => {
        navigate("/cart")
    }

    const men = () => {
        navigate("/wishlist")
    }

    const women = () => {
        navigate("/user")
    }

    const babyKids = () => {
        navigate("/user")
    }

    const grocery = () => {
        navigate("/user")
    }

    return (
        <div className="catagories"ies >
            <span className="catagory">Electronics</span>
            <span className="catagory">Home & Furniture</span>
            <span className="catagory">Men</span>
            <span className="catagory">Women</span>
            <span className="catagory">Baby & Kids</span>
            <span className="catagory">Grocery</span>
        </div>
    )
}

export default Category