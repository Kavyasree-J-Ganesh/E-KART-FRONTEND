import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import download from "../../assest/download.jpg";
import { Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { addToCart, getCart, removeFromCart } from "../../Services/cartService";
import { useDispatch, useSelector } from "react-redux";
import "./Cart1.css";
import { useNavigate } from "react-router-dom";

function Cart1(props) {
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = useSelector((state) => state.cart);

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
      alert(" product added");
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
      <Header />
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
                      width={"60px"}
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
                      RS {product.discountedPrice}
                    </div>
                    <div className="buttonOperationsMycrt">
                      <RemoveCircleOutlineIcon
                        // onClick={() => reduce(item.productId, item)}
                        onClick={() => addToCartList(product.productId)}
                        sx={{ height: "24px" }}
                      />
                      {/* <div className="counterFormycrtt">{item.quantity}</div> */}
                      <div className="counterFormycrtt">{product.quantity}</div>
                      <AddCircleOutlineIcon
                        onClick={() => removeFromCartList(product.productId)}
                        sx={{ height: "24px" }}
                      />
                      <Button
                        onClick={() => {
                          // reset(item.productId, item);
                        }}
                        variant={"text"}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cart && cart.product && (
            <div className="cart_place">
              {totalPrice ? <span>Total: {totalPrice}</span> : ""}
              <button
                className="cart_place_order"
                onClick={() => {
                  navigate("/address");
                }}
              >
                PLACE ORDER
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart1;
