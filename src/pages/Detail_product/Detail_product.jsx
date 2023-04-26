import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header';
import StarIcon from '@mui/icons-material/Star';
import { Button, IconButton } from '@mui/material';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TextField from "@mui/material/TextField";
import { getProduct } from "../../Services/ProductService";
import { useParams } from "react-router-dom";

import "./Detail_product.css"

function Detail_product() {

    const [showCounter, setShowCounter] = useState(false);
    const [counter, setCounter] = useState(1);
    const [addedToWishlist, setAddedToWishlist] = useState(false);
    const { id } = useParams();
    const [product, setproduct] = useState();


    const getBookById = () => {
        getProduct(id)
            .then((res) => {
                setproduct(res.data.data);
            })
            .catch((err) => console.log("error : ", err));
    };


    return (
        <div>
            <Header />
            <div className='allMain'>
                <div className="main-container">
                    <div className="left-side">
                        <div className="img-detail">
                            {/* <img src={product.bookName} alt="img"></img> */}
                            <img src='data:image/jpeg;base64,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' alt="img"></img>
                        </div>
                        <div className="product-button">
                            {showCounter ? (
                                <div className="counter">
                                    <iconbutton
                                        className="reduce-counter"
                                        onClick={() => {
                                            setCounter(counter - 1);
                                            // removeBookToCart();
                                        }}
                                        disabled={counter < 2}
                                    >
                                        -
                                    </iconbutton>
                                    <div className="counter-value">{counter}</div>
                                    <iconbutton
                                        className="increase-counter"
                                        onClick={() => {
                                            setCounter(counter + 1);
                                            // addBookToCart();
                                        }}
                                    >
                                        +
                                    </iconbutton>
                                </div>
                            ) : (
                                <iconbutton
                                    // variant="contained"
                                    // size="large"
                                    style={{ margin: "5px", border: "1px solid #ac3b48", }}
                                    onClick={() => {
                                        setShowCounter(true);
                                        // addBookToCart();
                                    }}
                                >
                                    ADD TO BAG
                                </iconbutton>
                            )}
                            {addedToWishlist ? (
                                <iconbutton
                                    style={{
                                        margin: "5px",
                                        border: "1px solid #ac3b48",
                                        borderRadius: "0%"
                                    }}
                                    onClick={() => {
                                        setAddedToWishlist(false);
                                    }}
                                >
                                    Remove from WISHLIST
                                </iconbutton>
                            ) : (
                                <iconbutton
                                    style={{
                                        margin: "5px",
                                        border: "1px solid #ac3b48",
                                    }}
                                    onClick={() => {
                                        // addBookToWishList(id)
                                        //     .then((res) => {
                                        setAddedToWishlist(true);
                                        //     console.log("response", res.data);
                                        // })
                                        // .catch((err) => console.error("error :", err));
                                    }}
                                >
                                    WISHLIST
                                </iconbutton>
                            )}
                            {/* <div className="add-to-bag">
                                <button> Add to Bag</button>
                            </div>
                            <div className="wishlist">
                                <button> wishlist</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="product-title"> Sam's Phone</div>
                        {/* <div className="product-title"> {product.title}</div> */}
                        <div className='product-manufacturer'> By OnePlus</div>
                        {/* <div className='product-manufacturer'> {product.manufacturer}</div> */}
                        <div className="product_review">
                            <span className="product_review_value">
                                4.5 <StarIcon sx={{ fontSize: 15, color: 'white' }} />
                            </span>
                            <span className="product_review_count">(20)</span>
                        </div>
                        <div className="product-price">
                            <div className="product-real">
                                {/* <div className={product.realPrice}> */}
                                Rs. 65,000
                            </div>
                            <div className="product-discount">
                                {/* <div className={product.discountedPrice}> */}
                                Rs. 55,000
                            </div>
                        </div>
                        <hr />
                        <div className="product-description">
                            <div className="detail">Product Detail</div>
                            <div className="descrip"> OnePlus 9 pro OnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 proOnePlus 9 pro
                                {/* <div className="descrip">{product.description} */}
                            </div>
                        </div>
                        <hr />
                        <div style={{ width: "100%", textAlign: "left", marginTop: "20px" }}>
                            <h3>Customer Feedback</h3>
                            <div className="feedback-box">
                                <div>Overall Rating</div>
                                <StarBorderIcon style={{ width: "20px", height: "20px" }} />
                                <StarBorderIcon style={{ width: "20px", height: "20px" }} />
                                <StarBorderIcon style={{ width: "20px", height: "20px" }} />
                                <StarBorderIcon style={{ width: "20px", height: "20px" }} />
                                <StarBorderIcon style={{ width: "20px", height: "20px" }} />
                                <TextField
                                    style={{
                                        width: "100%",
                                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                                        Error: "1px solid #E2E2E2",
                                        ErrorRadius: "2px",
                                        opacity: "1",
                                    }}
                                    size="small"
                                />
                                <Button
                                    variant="contained"
                                    style={{
                                        borderRadius: "2px",
                                        marginTop: "10px",
                                    }}
                                >
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Detail_product;
