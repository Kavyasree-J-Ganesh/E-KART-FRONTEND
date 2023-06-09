import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import "./Checkoutform.css";
import { useSelector } from "react-redux";
import { createOrder } from "../../Services/orderService";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const { cart, address } = useSelector((state) => state);

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    try {
      await createOrder({
        address: address.selectedAddress,
        product: cart.product,
      });
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout`,
        },
      });
      navigate("/checkout")
    } catch (error) { }
  };
  return (
    <div className="main-checkout-form">
      <PaymentElement />
      <button onClick={handleCheckout} className="payment-checkout">
        Checkout
      </button>
    </div>
  );
}

export default CheckoutForm;
