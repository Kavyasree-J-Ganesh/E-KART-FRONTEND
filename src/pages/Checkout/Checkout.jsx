import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PlacedImg from '../../assest/Orderplacedsuccessfully.png'
import "./Checkout.css";
import Header from "../../components/Header/Header";

function Checkout() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="main-placed">
                <img src={PlacedImg} alt="placed-Img" />
                <div>
                    Hurray!! Your Order is confirmed <br></br> the order id is #123456
                    save the order for <br></br>further communication..
                </div>
                <div className="table">
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr className="checkout-table-heading">
                                    <th>Email</th>
                                    <th>Contact Us</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="checkout-table-row">
                                    <td>admin@bookstore.com</td>
                                    <td>+91 8163475881</td>
                                    <td>
                                        42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex,
                                        near Kumarakom restaurant, HSR Layout, Bangalore 560034
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="shopping">
                    <Button
                        size="small"
                        variant="contained"
                        style={{ marginTop: "5px" }}
                        onClick={() => navigate("/home")}
                    >
                        Continue Shopping
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
