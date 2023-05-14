import React, { useState, useEffect } from "react";
import { getAddress, deleteAddress } from "../../Services/AddressService";
import { useDispatch, useSelector } from "react-redux";
import "./AddandDeleteAddress.css";
import { useNavigate, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

function AddandDeleteAddress() {
  const address = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [itemInpage, setItemInPage] = useState([]);
  const [updateData, setUpdateData] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  useEffect(() => {
    getAddress()
      .then((res) => {
        setItemInPage(res.data.data);
      })
      .catch((err) => console.error("error :", err));
  }, [updateData]);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };


  const selectAddress = (address) => {
    dispatch({"type": "SELECT_ADDRESS", payload: address})
    navigate("/address", {
      state: {
        isSubmitted: true,
      },
    });
  }

  return (
    <div>
      <div>
        <div className="cartMainBox-address">
          <div className="cartHeadNames-address">
            <div className="page-dir-address" style={{ color: "#9D9D9D" }}>
              {" "}
              Home /&nbsp;
            </div>
            <div className="page-dir-address"> My Addresses</div>
          </div>
          <div className="mainMyCArtt-address">
            <div className="HeadingOfMyCartog-address">
              <div className="MycartLeftHeading-address">My Address</div>
              <button
                className="add-address"
                style={{
                  padding: "5px",
                  marginRight: "5px",
                }}
                onClick={() => {
                  navigate("/address");
                }}
              >
                ADD New Address
              </button>
            </div>
            <div className="productSectionOfmyCart-address">
              {itemInpage.map((product, index) => (
                <div className="productsArrayMyArt-address" key={index}>
                  <div
                    className="productrightcontntmtcrt-address"
                      onClick={() => selectAddress(product)}
                  >
                    <div className="titleMyproductcrt-address">
                      Full name: {product.fullName}
                    </div>
                    <div className="author-address">
                      Phone number: {product.mobile}{" "}
                    </div>
                    <div className="price111cart-address">
                      <span className="cart_item_price-address">
                        Address: {product.address}
                      </span>
                      <span className="cart_item_discount_price-address">
                        {product.town}
                      </span>
                    </div>
                  </div>
                  <div className="right-side-address">
                    <div className="cart_add_and_remove-address">
                      <button
                        className="wishlist_new-address"
                        style={{
                          fontSize: "14px",
                          padding: "7px",
                          background: "#f6f5ea",
                          border: "2px solid #f0e9e9",
                          width: "80px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={() => {
                          deleteAddress(product.id)
                            .then((res) => {
                              setUpdateData(!updateData);
                            })
                            .catch((err) => {
                              console.error("error :", err);
                              setUpdateData(!updateData);
                            });
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {address && address.product && (
            <div className="cart_place">
              <button className="cart_place_order" onClick={handleSubmit}>
                PLACE ORDER
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddandDeleteAddress;
