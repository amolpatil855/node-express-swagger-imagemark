"use strict";
let Promise = require('bluebird');
let subscribeService = require("./subscribe");

module.exports = {
  payment: payment,
};

function payment(authMail, stripeSecretKey, data, cb) {
  console.log('authMail----',authMail)
  console.log('stripeSecretKey---',stripeSecretKey)
  console.log('data---',data)
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
      console.log('out-------')
      cb();
      this.subscribeService.sendSubscribeMailAsync(authMail, data)
    }
  });
}

Promise.promisifyAll(module.exports);
