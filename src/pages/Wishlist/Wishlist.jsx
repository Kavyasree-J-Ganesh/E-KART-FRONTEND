import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { useParams, useNavigate } from "react-router-dom";
import "./Wishlist.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";


import {
  getWishlist,
  addToWishlist,
  removeFromWishList,
} from "../../Services/WishlistService";
import { addToCart } from "../../Services/cartService";

function Wishlist(props) {
  const [wishlist, setWishlist] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCartItems();
  }, []);


  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);


  async function getCartItems() {
    try {
      const response = await getWishlist();
      setWishlist(response.data.data.products);
      //   dispatch({ type: "SET_CART", payload: cart.data.data });
    } catch (e) {
      console.log(e);
    }
  }

  const addToCartList = async (id) => {
    try {
      await addToCart(id)
    } catch (e) {
      console.log(e);
    }
  };

  const removeItemFromWishList = async (id) => {
    try {
      await removeFromWishList(id);
      getCartItems();
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div className="product_cart" >
      <div className="cartHeadNames-order">
        <div className="Wishlist_Heading" style={{ color: "#9D9D9D" }}>
          {" "}
          Home /&nbsp;
        </div>
        <div className="Wishlist_Heading_inner"> My Wishlist</div>
      </div>
      {wishlist && <div className="cart">
        {wishlist.map(product => (
          <div className="cart_item">
            <div className="cart_item_details">
              <div className="cart_item_image">
                <img style={{ width: "4rem", height: "85%" }} src={product.Image} alt="product" />
              </div>
              <div className="cart_item_desc">
                <h6 className="cart_item_heading">{product.title}</h6>
                <div className="cart_item_author">by {product.manufacturer}</div>
                <div class="cart_item_price">
                  <span className="cart_item_price">{`Rs. ${product.discountedPrice}`}</span>
                  <span className="cart_item_discount_price">{`Rs. ${product.realPrice}`}</span>
                </div>
              </div>
            </div>

            <div className="cart_add_or_remove">
              <a style={{ fontSize: "12px" }} className="cart_remove_all" onClick={() => removeItemFromWishList(product.productId)}>Remove</a>
              <a style={{ fontSize: "12px" }} className="cart_remove_all" onClick={() => addToCartList(product.productId)}>Add To Cart</a>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default Wishlist;
