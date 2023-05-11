import React from "react";
import './Order_History.css'

function Order_History() {



    return (
        <div>
            <div>
                <div className="cartMainBox-order">
                    <div className="cartHeadNames-order">
                        <div className="page-dir-order" style={{ color: "#9D9D9D" }}>
                            {" "}
                            Home /&nbsp;
                        </div>
                        <div className="page-dir-order"> My Orders</div>
                    </div>
                    <div className="mainMyCArtt-order">
                        <div className="HeadingOfMyCartog-order">
                            <div className="MycartLeftHeading-order">My Orders</div>
                        </div>
                        <div className="productSectionOfmyCart-order">

                            <div className="productsArrayMyArt-order">
                                <div
                                    className="productrightcontntmtcrt-order"

                                >
                                    <div className="titleMyproductcrt-order">
                                        Title:
                                    </div>
                                    <div className="author-order">
                                        Manufacturer:
                                    </div>
                                    <div className="price111cart-order">
                                        <span className="cart_item_price-order">
                                            Price:
                                        </span>
                                    </div>
                                    <span className="cart_item_discount_price-order">
                                        Purchased Date:
                                    </span>
                                </div>
                                <div className="right-side-order">
                                    <div className="cart_add_and_remove-order">
                                        <button
                                            className="order-new"
                                            style={{
                                                fontSize: "14px",
                                                padding: "7px",
                                                background: "#f6f5ea",
                                                border: "2px solid #f0e9e9",
                                                width: "80px",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}

                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div className="cart_place-order">
                            <button className="cart_place_order-order" >
                                PLACE ORDER
                            </button>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Order_History;
