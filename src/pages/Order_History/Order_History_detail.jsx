import React from 'react'
import './Order_History_detail.css'
import { useNavigate } from "react-router-dom";



function Order_History_detail() {
    const navigate = useNavigate();


    return (
        <div>
            <div>
                <div className="cartMainBox-orderDetail">
                    <div className="cartHeadNames-orderDetail">
                        <div className="page-dir-orderDetail" style={{ color: "#9D9D9D" }}>
                            {" "}
                            Home /&nbsp;
                        </div>
                        <div className="page-dir-orderDetail">Order Detail</div>
                    </div>
                    <div className="mainMyCArtt-orderDetail">
                        <div className="HeadingOfMyCartog-orderDetail">
                            <div className="MycartLeftHeading-orderDetail">Orders Detail</div>
                        </div>
                        <div className="productSectionOfmyCart-orderDetail">

                            <div className="productsArrayMyArt-orderDetail">
                                <div
                                    className="productrightcontntmtcrt-orderDetail"
                                >
                                    <div className="titleMyproductcrt-orderDetail">
                                        Title:
                                    </div>
                                    <div className="author-orderDetail">
                                        manufacturer:
                                    </div>
                                    <div className="price111cart-orderDetail">
                                        <div className="cart_item_price-orderDetail">
                                            price:
                                        </div>
                                    </div>
                                    <div className="cart_place-orderDetail">
                                        <div className="cart_total-orderDetail" style={{ fontWeight: 600 }} >Total Amount :  </div>
                                        <button className="cart_place_order" onClick={() => {
                                            navigate("/Order-History")
                                        }} >Go to Order History
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order_History_detail
