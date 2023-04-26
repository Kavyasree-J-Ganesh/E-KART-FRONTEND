import React, { useEffect, useState } from "react"
import StarIcon from '@mui/icons-material/Star';
import "./ProductDetails.css"
import Header from "../../components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../Services/ProductService";
import { addToCart, removeFromCart, getCart } from "../../Services/cartService";
import { Rating } from 'react-simple-star-rating'
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = (props) => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const cart = useSelector(state => state.cart)
    const [currentProduct, setCurrentProduct] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id);
    }, [id])


    useEffect(() => {
        if (cart && cart.product) {
            let itemIndex = cart.product.findIndex(product => product.productId === id)
            if (itemIndex >= 0) {
                setCurrentProduct(cart.product[itemIndex])
            } else {
                setCurrentProduct(null)
            }
        }
    }, [cart])

    async function getCartItems() {
        try {
            const cart = await getCart();
            dispatch({ type: "SET_CART", payload: cart.data.data })
        } catch (e) {
            console.log(e)
        }
    }

    const addToCartList = async () => {
        if(currentProduct?.quantity) {
            navigate("/cart")
        }
        try {
            await addToCart(id);
            getCartItems();
        } catch (e) {
            console.log(e)
        }
    }

    const removeFromCartList = async () => {
        try {
            await removeFromCart(id);
            getCartItems();
        } catch (e) {
            console.log(e)
        }
    }

    const getProductById = async (id) => {
        try {
            const result = await getProduct(id)
            setProduct(result.data.data)
        } catch (e) {
            console.log(e);
        }
    }



    return (
        <div className="prodct" >
            <Header />

            <div className="product_box">
            {product && (<div className="product_detail">
                <div className="product_image">
                    <div className="image_congtainer">
                        <div style={{ Height: "100%" }} className="imagegallery" >
                            <img className="main_image" src={product.image} alt="image" />
                            <div className="product_buy">
                                <button
                                    className="product_add_to_cart"
                                    onClick={addToCartList}>
                                    {currentProduct?.quantity ? 'GO TO CART' : 'ADD TO CART'}
                                </button>
                                <button className="product_buy_wishlist">WISHLIST</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_description">
                    <div className="product_summary">
                        <h6 className="product_details_heading">{product.title}</h6>
                        <span className="product_details_manufacturer">by {product.manufacturer}</span>
                        {product.rating != "0" && <div className="product_review">
                            <span className="product_review_value">
                                {product.rating} <StarIcon sx={{ fontSize: 10, color: 'white' }} />
                            </span>
                            <span className="product_review_count">{product.reviewcount}</span>
                        </div>}
                        <div class="product_price">
                            <span className="product_details_price">{`Rs. ${product.realPrice}`}</span>
                            <span className="product_details_discount_price">{`Rs. ${product.discountedPrice}`}</span>
                        </div>
                    </div>
                    <div className="product_info">
                        <span className="product_info_head">Product Details</span>
                        <p className="product_info_desc">{product.description}</p>
                    </div>
                    <div className="product_feedback">
                        <span className="product_feedback_head">Customer feedback</span>
                        <div className="product_rating">
                            <span className="product_rating_desc">overall rating</span>
                            <div className="product_rating_stars">
                                <Rating size={25}
                                    readonly={true}
                                    initialValue={product.rating}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
            </div>
        </div>
    )
}

export default ProductDetails;