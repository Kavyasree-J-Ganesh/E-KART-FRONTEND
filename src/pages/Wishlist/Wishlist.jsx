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
      await addToWishlist(id);
      getCartItems();
      navigate("/cart")
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromCartList = async (id) => {
    try {
      await removeFromWishList(id);
      getCartItems();
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div>
      <div className="cartMainBox">
        <div className="page-dir" style={{ color: "#9D9D9D" }}>
          Home /
        </div>
        <div className="page-dir"> My Wishlist</div>
      </div>
      <div className="mainMyCArtt">
        <div className="HeadingOfMyCartog">
          <div className="MycartLeftHeading">
            My Wishlist
          </div>
        </div>
        {wishlist && (
          <div className="productSectionOfmyCart">
            {wishlist.map((product, index) => (
              <div className="productsArrayMyArt" key="index">
                <div className="imgInMyCartOfproduct">
                  <img
                    src={product.Image}
                    height={"85px"}
                    alt="product"
                    width={"60px"}
                  />
                </div>
                <div className="productrightcontntmtcrt">
                  <div className="titleMyproductcrt">
                    {product.title}
                    <Button
                      onClick={() => removeFromCartList(product.productId)}
                      variant={"text"}
                    >
                      <DeleteIcon style={{ color: "#999e9e" }} />
                    </Button>
                  </div>
                  <div
                    className="author"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "25px",
                      marginLeft: "auto",
                    }}
                  >
                    by {product.manufacturer}
                  </div>

                  <div className="price111cart">RS {product.discountedPrice}</div>
                </div>
                <button
                  className="product_buy_wishlist"
                  onClick={
                    isAddedToWishlist
                      ? removeFromCartList
                      : addToCartList
                  }
                >
                  {isAddedToWishlist ? "Go to Cart" : "Add To Cart"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
