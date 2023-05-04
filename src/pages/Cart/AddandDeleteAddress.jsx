import React, { useState, useEffect } from 'react'
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { addToCart, getCart, removeFromCart } from "../../Services/cartService";
import { getAddress, deleteAddress } from '../../Services/AddressService';
import { useDispatch, useSelector } from "react-redux";
import "./AddandDeleteAddress.css"
import { useNavigate, useParams } from "react-router-dom";
import {
    addToWishlist,
    removeFromWishList,
} from "./../../Services/WishlistService";




function AddandDeleteAddress() {

    let { id } = useParams();
    const address = useSelector((state) => state.address);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [itemInpage, setItemInPage] = useState([]);
    const [updateData, setUpdateData] = useState(false);


    useEffect(() => {
        getAddress()
            .then((res) => {
                setItemInPage(res.data.data);
            })
            .catch((err) => console.error("error :", err));
    }, [updateData]);



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
                            <div className="MycartLeftHeading-address">
                                My Address
                            </div>
                            <button className="add-address"
                                onClick={() => {
                                    navigate("/address");
                                }}>
                                ADD New Address
                            </button>
                        </div>
                        <div className="productSectionOfmyCart-address">
                            {itemInpage.map((product) => (
                                <div div className="productsArrayMyArt-address">
                                    <div className="productrightcontntmtcrt-address">
                                        <div className="titleMyproductcrt-address">{product.fullName}</div>
                                        <div
                                            className="author-address"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                height: "25px",
                                                marginLeft: "auto",
                                            }}
                                        >
                                            {product.mobile}{" "}
                                        </div>
                                        <div className="price111cart-address">
                                            <span className="cart_item_price-address">{product.address}</span>
                                            <span className="cart_item_discount_price-address">{product.town}</span>
                                        </div>
                                        <div className="cart_add_and_remove-address">
                                            <button
                                                className="wishlist_new-address"
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

        </div >
    )
}

export default AddandDeleteAddress
