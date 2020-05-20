"use strict";

let paymentService = require('../../services/payment');
let commonService = require('../../services/common');
module.exports = {
  makePayment: makePayment,
};

function makePayment(req, res, next) {
  paymentService
    .paymentAsync(req.stripeSecretKey, req.body)
      .then((result) => {
        res.json(commonService.resJson('Payment done successfully.', result));
      })
      .catch(next);
}
