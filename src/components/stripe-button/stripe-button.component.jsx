import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IKnPcHTEUAfWdDa1F6aOMcSXiATqLCleFaXg1yT8ztMsnzOXQBKJ6RIWMrYEuy2wtD4HYa3YBQrOXo8NkbDMwnI00rOQyLqH1";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Pty (Ltd.)'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is R${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
