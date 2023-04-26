import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function Strip_Payment() {
    const [demoProduct] = useState({
        name: "Sample",
        price: 100,
        description: "lorem Ipsum"
    });

    async function handleToken(token) {
        //     const response = await axios.post('http://localhost:6060/api/v1/payment', { token, demoProduct });
        //     console.log(response.status);
        // }
        try {
            const response = await axios.post('http://localhost:6060/api/v1/payment', { token, demoProduct });
            console.log(response.status);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <StripeCheckout
                stripeKey="pk_test_51N12BsSHL3ZIWrpnuCIcbFzlmfLfaiEHDVYHVQdtCGuZcvHFgXBcnDnUyGMzifalYZ9rS3dtbWhq0OBoNGc0ZjBc00LPxcU5Hr"
                label="Pay Now"
                name="Pay with Credit Card"
                style={{ margin: "300px" }}
                token={handleToken}
                amount={demoProduct.price * 100}
                currency="USD"
            // billingAddress
            // shippingAddress
            />
        </div>
    )
}

export default Strip_Payment;
