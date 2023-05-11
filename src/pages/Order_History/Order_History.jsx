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
                                        Total Product:
                                    </div>
                                    <div className="author-order">
                                        Total Price:
                                    </div>
                                    <div className="price111cart-order">
                                        <div className="cart_item_price-order">
                                            Purchased Date:
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Order_History;
