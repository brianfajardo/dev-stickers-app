import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { stripePublishableKey } from '../../keys/development'

// Client development, to be replaced with actual keys when
// connecting to a server for token authentication.

const CheckoutPayment = props => (
  <StripeCheckout
    name="Clientside ends here 🏄"
    description="TODO: Server to handle payment"
    panelLabel="Pay"
    amount={props.total * 100} // convert to cents
    currency="CAD"
    token={token => console.log(token)} // do something with callback token from Stripe --> server
    stripeKey={stripePublishableKey}
  />
)

export default CheckoutPayment
