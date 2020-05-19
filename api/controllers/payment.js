"use strict";

module.exports = {
  makePayment: makePayment,
};

function makePayment(req, res) {
  const stripe = require('stripe')(req.stripeSecretKey);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
  };

  stripe.charges.create(body,(stripeErr,stripeRes) => {
    if (stripeErr) {
      res.status(500).send({error:stripeErr});
    } else  {
      res.json({
        message: "Payment successfully."
      });
    }
});
}
