import React from "react";
import './OrderHistory.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../Services/orderService";

const getIndividualOrders = (orderData)=>{
   let orders = [];

   orderData.forEach(order=>{
    order.product.forEach(product=>{
        orders.push({...product, address: order.address})
    })
   })

   return orders;
}


function OrderHistory() {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orders)

    useEffect(() => {
        getOrderList()
    }, [])

    const getOrderList = async () => {
        try {
            const result = await getOrders();
            const orders = getIndividualOrders(result.data.data)
            dispatch({ type: "SET_ORDERS", payload: orders })
        } catch (e) {

        }
    }

    return (
        <div>
            <div>
                <div className="orders">
                    <div className="orders_heading">
                        <div className="page-dir-order" style={{ color: "#9D9D9D" }}>
                            {" "}
                            Home /&nbsp;
                        </div>
                        <div className="page-dir-order"> My Orders</div>
                    </div>
                    
                    {orders && <div className="order">
                        {orders.map((product, index) => (
                            <div className="order_item" key={index}>
                                <div className="order_item_details">
                                    <div className="order_item_image">
                                        <img style={{ width: "4rem", height: "85%" }} src={product.image} alt="product" />
                                    </div>
                                    <div className="order_item_desc">
                                        <h6 className="order_item_heading">{product.title}</h6>
                                        <div className="order_item_price">
                                            <span className="order_item_price">{`Rs. ${product.discountedPrice * product.quantity}`}</span>
                                        </div>
                                    </div>
                                    <div className="order_item_address">
                                        <span className="order_item_address_heading">Delivery Address:</span>
                                        <span className="order_item_address_customer">{product.address.fullName} </span>
                                        <span>
                                            {`${product.address.mobile}
                                              ${product.address.address} ${product.address.town}
                                              ${product.address.state}`
                                            } 
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default OrderHistory;
