import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeCheckoutBtn({ price }) {

    const priceForStripe = price*100
    const publishableKey = 'pk_test_51JAngtKM7R6RQvUPXjKl0m3hUI3p8aMqlLDvidQmaXppRePANoUuabtA8N5Sj4lmeTsw6jHZiWo9vGOc9SzVDCHZ00Xw9HlI00'

    const onToken = (token) => {
        console.log(token)
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Chlothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

//4242 4242 4242 4242 01/20 123

export default StripeCheckoutBtn
