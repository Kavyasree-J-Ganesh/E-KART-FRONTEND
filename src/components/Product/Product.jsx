import React from "react";
import StarIcon from '@mui/icons-material/Star';
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
    const navigate = useNavigate();
    const showProductDetails = (id)=>{
        navigate(`/home/${id}`)
    }
    return (
        <div className="product" onClick={()=>showProductDetails(props.product._id)}>
            <div className="product_img">
                <img src={props.product.image} alt={props.product.productName} />
            </div>
            <div className="product_details">
                <h6 className="product_details_title">{props.product.title}</h6>
                <span className="product_details_description"> {props.product.description}</span>
                {props.product.rating != "0" && <div className="product_review">
                   <span className="product_review_value">
                    {props.product.rating} <StarIcon sx={{fontSize: 10, color: 'white'}} />
                   </span>
                   <span className="product_review_count">({props.product.reviewcount})</span>
                </div>}
                <div class="product_price">
                    <span className="product_details_realPrice">{`Rs. ${props.product.realPrice}`}</span>
                    <span className="product_details_discounted_price">{`Rs. ${props.product.discountedPrice}`}</span>
                </div>
            </div>
        </div>
    )

}

export default Product;