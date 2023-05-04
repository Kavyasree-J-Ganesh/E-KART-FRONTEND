import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import download from "../../assest/download.jpg";
import { Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { addToCart, getCart, removeFromCart } from "../../Services/cartService";
import { useDispatch, useSelector } from "react-redux";
import "./Cart1.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishList,
} from "./../../Services/WishlistService";
import AddIcon from '@mui/icons-material/Add';




function Cart1(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  let { id } = useParams();
  const cart = useSelector((state) => state.cart);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getCartItems();
  }, []);

  useEffect(() => {
    let total = 0;
    if (cart?.product?.length) {
      cart?.product.map((item) => {
        total = total + item?.discountedPrice * item.quantity;
      });
      setTotalPrice(total);
    }
  }, [cart]);


  const handleAddToWishList = () => {
    addToWishlist(id)
      .then((res) => {
        setIsAddedToWishlist(true);
        console.log("response", res);
      })
      .catch((err) => console.error("error", err));
  };

  const handleRemoveFromWishList = () => {
    removeFromWishList(id)
      .then((res) => {
        setIsAddedToWishlist(false);
        console.log("response", res);
      })
      .catch((err) => console.error("error", err));
  };

  async function getCartItems() {
    try {
      const cart = await getCart();
      dispatch({ type: "SET_CART", payload: cart.data.data });
    } catch (e) {
      console.log(e);
    }
  }

  const addToCartList = async (id) => {
    try {
      await addToCart(id);
      getCartItems();
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromCartList = async (id) => {
    try {
      await removeFromCart(id);
      getCartItems();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="cartMainBox">
        <div className="cartHeadNames">
          <div className="page-dir" style={{ color: "#9D9D9D" }}>
            {" "}
            Home /&nbsp;
          </div>
          <div className="page-dir"> My Cart</div>
        </div>
        <div className="mainMyCArtt">
          <div className="HeadingOfMyCartog">
            <div className="MycartLeftHeading">
              My Cart
              {/* {product.length ? `(${product.length})` : ""} */}
            </div>
          </div>
          {/* headings */}
          {cart && cart.product && (
            <div className="productSectionOfmyCart">
              {cart.product.map((product) => (
                <div div className="productsArrayMyArt">
                  <div className="imgInMyCartOfproduct">
                    <img
                      src={product.image}
                      height={"85px"}
                      width={"80px"}
                    ></img>
                  </div>
                  <div className="productrightcontntmtcrt">
                    <div className="titleMyproductcrt">{product.title}</div>
                    <div
                      className="author"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "25px",
                        marginLeft: "auto",
                      }}
                    >
                      by {product.manufacturer}{" "}
                    </div>
                    <div className="price111cart">
                      {/* RS {product.discountedPrice} */}
                      <span className="cart_item_price">{`Rs. ${product.realPrice}`}</span>
                      <span className="cart_item_discount_price">{`Rs. ${product.discountedPrice}`}</span>
                    </div>

                    <div className="cart_add_and_remove">
                      <AddCircleOutlineIcon className="cart_add_new" onClick={() => addToCartList(product.productId)}>+</AddCircleOutlineIcon>
                      <div className="cart_count_new">{product.quantity}</div>
                      <RemoveCircleOutlineIcon className="cart_remove_new" onClick={() => removeFromCartList(product.productId)}>-</RemoveCircleOutlineIcon>
                      {/* <a style={{ fontSize: "12px" }} className="cart_remove_all">Remove</a> */}
                      <button
                        className="wishlist_new"
                        onClick={
                          isAddedToWishlist
                            ? handleRemoveFromWishList
                            : handleAddToWishList
                        }
                      >
                        {isAddedToWishlist ? "Remove" : "WISHLIST"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart && cart.product && (
          <div className="cart_place">
            {totalPrice ? <span>Total: {totalPrice}</span> : ""}
            <button
              className="cart_place_order button_info"
              onClick={() => {
                navigate("/choose-address");
              }}
            >
              PLACE ORDER
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart1;
