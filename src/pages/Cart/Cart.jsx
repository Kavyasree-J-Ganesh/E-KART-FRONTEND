import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import Header from "../../components/Header/Header";
import "./Cart.css";
import { addToCart, getCart, removeFromCart, deleteCartItem } from "../../Services/cartService"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToWishlist } from "../../Services/WishlistService";

const Cart = (props) => {

    const cart = useSelector(state => state.cart)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        getCartItems();
    }, [])

    async function getCartItems() {
        try {
            const cart = await getCart();
            dispatch({ type: "SET_CART", payload: cart.data.data })
        } catch (e) {
            console.log(e)
        }
    }

    const addToCartList = async (id) => {
        try {
            await addToCart(id);
            getCartItems();
        } catch (e) {
            console.log(e)
        }
    }

    const removeFromCartList = async (id) => {
        try {
            await removeFromCart(id);
            getCartItems();
        } catch (e) {
            console.log(e)
        }
    }

    const deleteFromCart = async (id) => {
        try {
            await deleteCartItem(id);
            getCartItems()
        } catch (e) {
            console.log(e)
        }
    }

    const addItemToWishlist = async (id) => {
        try {
            await addToWishlist(id)
        } catch (error) {

        }
    }

    return (
        <div className="product_cart" >
            <div className="cartHeadNames-order">
                <div className="cart_Heading" style={{ color: "#9D9D9D" }}>
                    {" "}
                    Home /&nbsp;
                </div>
                <div className="cart_Heading_inner"> My Cart</div>
            </div>
            {cart && cart.product && <div className="cart">
                {cart.product.map(product => (
                    <div className="cart_item">
                        <div className="cart_item_details">
                            <div className="cart_item_image">
                                <img style={{ width: "4rem", height: "85%" }} src={product.image} alt="product" />
                            </div>
                            <div className="cart_item_desc">
                                <h6 className="cart_item_heading">{product.title}</h6>
                                <div className="cart_item_author">by {product.manufacturer}</div>
                                <div className="cart_item_price">
                                    <span className="cart_item_price">{`Rs. ${product.discountedPrice}`}</span>
                                    <span className="cart_item_discount_price">{`Rs. ${product.realPrice}`}</span>
                                </div>
                            </div>
                        </div>

                        <div className="cart_add_or_remove">
                            <button className="cart_add" onClick={() => addToCartList(product.productId)}>+</button>
                            <div className="cart_count">{product.quantity}</div>
                            <button className="cart_remove" onClick={() => removeFromCartList(product.productId)}>-</button>
                            <a style={{ fontSize: "12px" }} className="cart_remove_all" onClick={() => deleteFromCart(product.productId)}>Remove</a>
                            <a style={{ fontSize: "12px" }} className="cart_remove_all" onClick={() => addItemToWishlist(product.productId)}>Add To Wishlist</a>
                        </div>
                    </div>
                ))}
            </div>}
            {cart && cart.product && <div className="cart_place">
                <div className="cart_total" style={{ fontWeight: 600 }} >Total Amount : {cart.cart_total} </div>
                <button className="cart_place_order" onClick={() => {
                    navigate("/choose-address");
                }}>
                    PLACE ORDER
                </button>
            </div>}
        </div>
    )
}



export default Cart;