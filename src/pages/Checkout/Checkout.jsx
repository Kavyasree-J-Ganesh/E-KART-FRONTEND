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
            <Header />
            <div className="main-placed">
                <img src={PlacedImg} alt="placed-Img" />
                <div>
                    Hurray!! Your Order is confirmed <br></br> the order id is #123456
                    save the order for <br></br>further communication..
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
