"use strict";
let Promise = require("bluebird");
let subscribeService = require("./subscribe");

module.exports = {
  payment: payment,
};

function payment(stripeSecretKey, data, cb) {
  const stripe = require("stripe")(stripeSecretKey);
  const body = {
    amount: data.amount,
    currency: data.currency
  };

  stripe.paymentIntents
    .create(body)
    .then((paymentIntentRes) => {
      cb(null, paymentIntentRes);
    })
    .catch((e) => cb(e));
}

Promise.promisifyAll(module.exports);
