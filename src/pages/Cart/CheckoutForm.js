import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleCheckout = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout`,
      },
    });
    console.log("erroror in checkout form", error);
    console.log("paymentIntent in checkout form", paymentIntent);
  };
  return (
    <div>
      <PaymentElement />
      <button onClick={handleCheckout} className="checkout-btn">
        Checkout
      </button>
    </div>
  );
}

export default CheckoutForm;
