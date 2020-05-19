"use strict";
let Promise = require('bluebird');
let subscribeService = require("./subscribe");

module.exports = {
  payment: payment,
};

function payment(authMail, stripeSecretKey, data, cb) {
  const stripe = require("stripe")(stripeSecretKey);
  const body = {
    source: data.token.id,
    amount: data.amount,
    currency: "inr",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      cb(stripeErr);
    } else {
      return this.subscribeService
        .sendSubscribeMailAsync(authMail, data)
        .then((review) => {
          cb();
        })
        .catch((err) => cb(err));
    }
  });
}

Promise.promisifyAll(module.exports);
