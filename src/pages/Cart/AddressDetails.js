// import React, { useState } from "react";
// import Header from "../../components/Header/Header";
// import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";
// import TextField from '@mui/material/TextField';
// import './AddressDetails.css'
// import { useNavigate } from 'react-router-dom';


// function AddressDetails() {

//     const navigate = useNavigate();


//     const [demoProduct] = useState({
//         name: "Sample",
//         price: 100,
//         description: "lorem Ipsum",
//     });

//     async function handleToken(token) {
//         //     const response = await axios.post('http://localhost:6060/api/v1/payment', { token, demoProduct });
//         //     console.log(response.status);
//         // }
//         try {
//             const response = await axios.post(
//                 "http://localhost:6060/api/v1/payment",
//                 { token, demoProduct, amount: 100 },
//                 {
//                     headers: {
//                         Authorization: `bearer -H sk_test_51N12BsSHL3ZIWrpnYrt2oBZigHN5hVGOmEJAFPeOsc1qNhDgMkKxtUrInFfLyMlChF5jlQby4qb6BlMsqFuRWTaN007kCWWHTQ`,
//                     },
//                 },
//             );
//             console.log(response.status);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     return (
//         <div>
//             <Header />
//             <div className="addressMainContainer">
//                 <div className="adbokDeatils">
//                     Address Details
//                 </div>
//                 <div className="fulNAameaddress">
//                     <div
//                         style={{
//                             width: "48%",
//                         }}
//                     >
//                         <h3 className="field-label">Full Name</h3>
//                         <TextField
//                             style={{
//                                 width: "100%",
//                                 background: "#FFFFFF 0% 0% no-repeat padding-box",
//                                 Error: "1px solid #E2E2E2",
//                                 ErrorRadius: "2px",
//                                 opacity: "1",
//                             }}
//                             size="small"
//                         />
//                     </div>
//                     <div
//                         style={{
//                             width: "48%",
//                         }}
//                     >
//                         <h3 className="field-label">Mobile Number</h3>
//                         <TextField
//                             style={{
//                                 width: "100%",
//                                 background: "#FFFFFF 0% 0% no-repeat padding-box",
//                                 Error: "1px solid #E2E2E2",
//                                 ErrorRadius: "2px",
//                                 opacity: "1",
//                             }}

//                             size="small"

//                         />
//                     </div>
//                 </div>
//                 <div
//                     className="fulNAameaddress"
//                     style={{ marginTop: "50px", marginBottom: "30px" }}
//                 >
//                     <div
//                         style={{
//                             width: "100%",
//                         }}
//                     >
//                         <h3 className="field-label">Address</h3>
//                         <TextField
//                             style={{
//                                 width: "100%",
//                                 background: "#FFFFFF 0% 0% no-repeat padding-box",
//                                 Error: "1px solid #E2E2E2",
//                                 ErrorRadius: "2px",
//                                 opacity: "1",
//                             }}
//                             size="small"
//                         />
//                     </div>
//                 </div>
//                 <div
//                     className="fulNAameaddress"
//                     style={{ marginTop: "50px", marginBottom: "20px" }}
//                 >
//                     <div
//                         style={{
//                             width: "48%",
//                         }}
//                     >
//                         <h3 className="field-label">Town</h3>
//                         <TextField
//                             style={{
//                                 width: "100%",
//                                 background: "#FFFFFF 0% 0% no-repeat padding-box",
//                                 Error: "1px solid #E2E2E2",
//                                 ErrorRadius: "2px",
//                                 opacity: "1",
//                             }}
//                             // onChange={handleEmail}
//                             size="small"
//                         />
//                     </div>
//                     <div
//                         style={{
//                             width: "48%",
//                         }}
//                     >
//                         <h3 className="field-label">State</h3>
//                         <TextField
//                             style={{
//                                 width: "100%",
//                                 background: "#FFFFFF 0% 0% no-repeat padding-box",
//                                 Error: "1px solid #E2E2E2",
//                                 ErrorRadius: "2px",
//                                 opacity: "1",
//                             }}
//                             size="small"
//                         />
//                     </div>
//                 </div>
//                 <div className="address_Container">
//                     <div className="checkout">
//                         {/* <Category /> */}

//                         <StripeCheckout
//                             stripeKey="pk_test_51N12BsSHL3ZIWrpnuCIcbFzlmfLfaiEHDVYHVQdtCGuZcvHFgXBcnDnUyGMzifalYZ9rS3dtbWhq0OBoNGc0ZjBc00LPxcU5Hr"
//                             label="Checkout"
//                             name="Pay with Credit Card"
//                             // style={{ color: "#fffff" }}
//                             token={handleToken}
//                             amount={demoProduct.price * 100}
//                             currency="INR"
//                         // onClick={() => navigate("/checkout")}
//                         // billingAddress
//                         // shippingAddress
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default AddressDetails;


import React, { useState } from "react";
import Header from "../../components/Header/Header";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import TextField from '@mui/material/TextField';
import './AddressDetails.css'
import { useNavigate } from 'react-router-dom';


function AddressDetails() {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [fullNameError, setFullNameError] = useState(false);

    const [mobileNumber, setMobileNumber] = useState("");
    const [mobileNumberError, setMobileNumberError] = useState(false);

    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState(false);

    const [town, setTown] = useState("");
    const [townError, setTownError] = useState(false);

    const [state, setState] = useState("");
    const [stateError, setStateError] = useState(false);

    const [demoProduct] = useState({
        name: "Sample",
        price: 100,
        description: "lorem Ipsum",
    });

    const validateFields = () => {
        let isValid = true;

        if (fullName.trim() === "") {
            setFullNameError(true);
            isValid = false;
        } else {
            setFullNameError(false);
        }

        if (mobileNumber.trim() === "" || mobileNumber.trim().length !== 10) {
            setMobileNumberError(true);
            isValid = false;
        } else {
            setMobileNumberError(false);
        }

        if (address.trim() === "") {
            setAddressError(true);
            isValid = false;
        } else {
            setAddressError(false);
        }

        if (town.trim() === "") {
            setTownError(true);
            isValid = false;
        } else {
            setTownError(false);
        }

        if (state.trim() === "") {
            setStateError(true);
            isValid = false;
        } else {
            setStateError(false);
        }

        return isValid;
    };

    async function handleToken(token) {
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

    const handleCheckout = () => {
        if (validateFields()) {
            // fields are valid, handle checkout
            console.log("Checkout successful!");
            // call handleToken function to make payment
            handleToken();
            // redirect to checkout page
            navigate("/checkout");
        } else {
            // fields are not valid, show error message
            console.log("Checkout failed!");
        }
    }

    return (
        <div>
            <Header />
            <div className="address-details-container">
                <h2>Enter your address details</h2>
                <form>
                    <TextField
                        label="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        error={fullNameError}
                        helperText={fullNameError ? "Please enter your full name" : ""}
                        required
                    />
                    <br />
                    <TextField
                        label="Mobile Number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        error={mobileNumberError}
                        helperText={
                            mobileNumberError ? "Please enter a valid mobile number" : ""
                        }
                        required
                    />
                    <br />
                    <TextField
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        error={addressError}
                        helperText={addressError ? "Please enter your address" : ""}
                        required
                    />
                    <br />
                    <TextField
                        label="Town"
                        value={town}
                        onChange={(e) => setTown(e.target.value)}
                        error={townError}
                        helperText={townError ? "Please enter your town" : ""}
                        required
                    />
                    <br />
                    <TextField
                        label="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        error={stateError}
                        helperText={stateError ? "Please enter your state" : ""}
                        required
                    />
                    <br />
                    <div className="checkout-button-container">
                        <StripeCheckout
                            stripeKey="your-stripe-public-key"
                            token={handleToken}
                            amount={demoProduct.price * 100}
                            name={demoProduct.name}
                            description={demoProduct.description}
                        // billingAddress
                        // shippingAddress
                        >
                            <button
                                className={fullNameError || mobileNumberError || addressError || townError || stateError ? "disabled" : ""}
                                onClick={handleCheckout}
                                disabled={fullNameError || mobileNumberError || addressError || townError || stateError}
                            >
                                Checkout
                            </button>
                        </StripeCheckout>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default AddressDetails;
