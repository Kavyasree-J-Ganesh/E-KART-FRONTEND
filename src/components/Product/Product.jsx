import React from "react";
import StarIcon from '@mui/icons-material/Star';
import "./Product.css";
import { useNavigate } from "react-router-dom";
import AddProduct from "../../components/AddProduct/AddProduct";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { searchText } from "../../Services/ProductService";

const Product = (props) => {
    const navigate = useNavigate();
    const [isAddProduct, setIsAddProduct] = useState(false)
    const auth = useSelector(state => state.auth)
    const showProductDetails = (id) => {
        if (!auth.isAdmin) {
            navigate(`/home/${id}`)
        } else {
            setIsAddProduct(prev => !prev)
        }
    }


    const [posts, setposts] = useState([]);
    const [searchResults, setsearchResults] = useState([]);


    // useEffect(() => {
    //     searchText().then(json => {
    //         setposts(json)
    //         return json
    //     }).then(json => {
    //         setsearchResults(json)
    //     })
    // }, []);


    return (
        <React.Fragment>
            {isAddProduct && <Modal open={isAddProduct} close={() => setIsAddProduct(prev => !prev)} >
                <AddProduct isNew={false} product={props.product} close={() => setIsAddProduct(prev => !prev)} />
            </Modal>}
            <div className="product" onClick={() => showProductDetails(props.product._id)}>
                <div className="product_picture">
                    <img src={props.product.image} alt={props.product.productName} />
                </div>
                <div className="product_details">
                    <h6 className="product_details_title">{props.product.title}</h6>
                    {/* <span className="product_details_description"> {props.product.description}</span> */}
                    {props.product.rating != "0" && <div className="product_review">
                        <span className="product_review_value">
                            {props.product.rating} <StarIcon sx={{ fontSize: 10, color: 'white' }} />
                        </span>
                        <span className="product_review_count">({props.product.reviewcount})</span>
                    </div>}
                    <div className="product_price">
                        <span className="product_details_realPrice">{`Rs. ${props.product.discountedPrice}`}</span>
                        <span className="product_details_discounted_price">{`Rs. ${props.product.realPrice}`}</span>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )

}

export default Product;