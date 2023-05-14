import React, { useState } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import TextField from "@mui/material/TextField";
import "./AddressDetails.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import CheckoutForm from "./Checkoutform";
// import { createAddress } from "../../Services/AddressService";
import { createAddress } from "./../../Services/AddressService";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const location = useLocation();

  const [demoProduct] = useState({
    name: "Sample",
    price: 100,
    description: "lorem Ipsum",
  });

  const [clientSecret, setClientSecret] = useState("");

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

  useEffect(() => {
    if (location.state?.isSubmitted) {
      setIsSubmitted(true);
    }
    axios
      .post(
        "http://localhost:6060/api/v1/payment/createPaymentIntent",
        {},
        {
          headers: {
            Authorization: `bearer ${localStorage.getItem("auth")}`,
          },
        },
      )
      .then((res) => {
        setClientSecret(res.data.charge.clientSecret);
      })
      .catch((err) => console.error("error in useEffect", err));
  }, []);

  const stripePromise = loadStripe(
    "pk_test_51N12BsSHL3ZIWrpnuCIcbFzlmfLfaiEHDVYHVQdtCGuZcvHFgXBcnDnUyGMzifalYZ9rS3dtbWhq0OBoNGc0ZjBc00LPxcU5Hr",
  );

  const handleSubmit = () => {
    let data = {
      fullName,
      mobile: mobileNumber,
      address,
      town,
      state,
    };
    createAddress(data)
      .then((res) => {
        toast.success("Address Added")
        navigate("/choose-address")
      })
      .catch((err) => console.log("address Not added", err));
    setIsSubmitted(true);
  };

  return (
    <div>
      {stripePromise && clientSecret ? (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: clientSecret }}
        >
          <div className="address-details-container">
            {isSubmitted ? (
              <CheckoutForm />
            ) : (
              <>
                <h2>Enter your address details</h2>
                <form>
                  <TextField
                    label="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    error={fullNameError}
                    helperText={
                      fullNameError ? "Please enter your full name" : ""
                    }
                    required
                  />
                  <br />
                  <TextField
                    label="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    error={mobileNumberError}
                    helperText={
                      mobileNumberError
                        ? "Please enter a valid mobile number"
                        : ""
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
                    <button
                      className="checkout_button"
                      onClick={
                        handleSubmit
                        // , createAddress(product.id)
                        //     .then((res) => {
                        //         setUpdateData(!updateData);
                        //     })
                        //     .catch((err) => {
                        //         console.error("error :", err);
                        //         setUpdateData(!updateData);
                        //     });
                      }
                      type="button"
                    >
                      Submit
                    </button>
                    {/* </StripeCheckout> */}
                  </div>
                </form>
              </>
            )}
          </div>
        </Elements>
      ) : (
        ""
      )}
      {/* <Header /> */}
    </div>
  );
}

export default AddressDetails;
