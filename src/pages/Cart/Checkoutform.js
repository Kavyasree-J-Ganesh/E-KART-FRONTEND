import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import './Checkoutform.css'


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
        <div className="main-checkout-form">
            <PaymentElement />
            <button onClick={handleCheckout} className="payment-checkout">
                Checkout
            </button>
        </ div>
    );
}

export default CheckoutForm;
