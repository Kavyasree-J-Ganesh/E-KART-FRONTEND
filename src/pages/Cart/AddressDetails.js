import React, { useState } from "react";
import Header from "../../components/Header/Header";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import TextField from '@mui/material/TextField';
import './AddressDetails.css'

function AddressDetails() {
    const [demoProduct] = useState({
        name: "Sample",
        price: 100,
        description: "lorem Ipsum",
    });

    async function handleToken(token) {
        //     const response = await axios.post('http://localhost:6060/api/v1/payment', { token, demoProduct });
        //     console.log(response.status);
        // }
        try {
            const response = await axios.post(
                "http://localhost:6060/api/v1/payment",
                { token, demoProduct, amount: 100 },
                {
                    headers: {
                        Authorization: `bearer -H sk_test_51N12BsSHL3ZIWrpnYrt2oBZigHN5hVGOmEJAFPeOsc1qNhDgMkKxtUrInFfLyMlChF5jlQby4qb6BlMsqFuRWTaN007kCWWHTQ`,
                    },
                },
            );
            console.log(response.status);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <Header />
            <div className="addressMainContainer">
                {/* <TextField id="outlined-basic" label="FullName" vari ant="outlined" />
            <TextField id="outlined-basic" label="Mobile" variant="outlined" />
            <TextField id="outlined-basic" label="Address" variant="outlined" />
            <TextField id="outlined-basic" label="Town" variant="outlined" />
            <TextField id="outlined-basic" label="State" variant="outlined" /> */}
                <div className="adbokDeatils">
                    Address Details
                </div>
                <div className="fulNAameaddress">
                    <div
                        style={{
                            width: "48%",
                        }}
                    >
                        <h3 className="field-label">Full Name</h3>
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
                    </div>
                    <div
                        style={{
                            width: "48%",
                        }}
                    >
                        <h3 className="field-label">Mobile Number</h3>
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
                    </div>
                </div>
                <div
                    className="fulNAameaddress"
                    style={{ marginTop: "50px", marginBottom: "30px" }}
                >
                    <div
                        style={{
                            width: "100%",
                        }}
                    >
                        <h3 className="field-label">Address</h3>
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
                    </div>
                </div>
                <div
                    className="fulNAameaddress"
                    style={{ marginTop: "50px", marginBottom: "20px" }}
                >
                    <div
                        style={{
                            width: "48%",
                        }}
                    >
                        <h3 className="field-label">Town</h3>
                        <TextField
                            style={{
                                width: "100%",
                                background: "#FFFFFF 0% 0% no-repeat padding-box",
                                Error: "1px solid #E2E2E2",
                                ErrorRadius: "2px",
                                opacity: "1",
                            }}
                            // onChange={handleEmail}
                            size="small"
                        />
                    </div>
                    <div
                        style={{
                            width: "48%",
                        }}
                    >
                        <h3 className="field-label">State</h3>
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
                    </div>
                </div>
                <div className="address_Container">
                    <div className="checkout">
                        {/* <Category /> */}

                        <StripeCheckout
                            stripeKey="pk_test_51N12BsSHL3ZIWrpnuCIcbFzlmfLfaiEHDVYHVQdtCGuZcvHFgXBcnDnUyGMzifalYZ9rS3dtbWhq0OBoNGc0ZjBc00LPxcU5Hr"
                            label="Checkout"
                            name="Pay with Credit Card"
                            // style={{ color: "#fffff" }}
                            token={handleToken}
                            amount={demoProduct.price * 100}
                            currency="INR"

                        // billingAddress
                        // shippingAddress
                        />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AddressDetails;
