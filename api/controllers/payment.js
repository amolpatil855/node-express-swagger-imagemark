"use strict";

let paymentService = require('../../services/payment');

module.exports = {
  makePayment: makePayment,
};

function makePayment(req, res, next) {
  paymentService
    .paymentAsync(req.mail, req.stripeSecretKey, req.body)
    .then(() => {
      res.json({
        message: "Payment & Subcribe plane successfully."
      });
    })
    .catch(next);
}
