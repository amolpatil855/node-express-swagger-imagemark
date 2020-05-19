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
    amount: data.amount
  };
  if(data.currency) {
    body['currency'] = data.currency
  }

  // subscribeService.sendSubscribeMailAsync(authMail, data)
  // cb();
  stripe.charges.create(body)
    .then((stripeRes) => {
      subscribeService.sendSubscribeMailAsync(authMail, data)
      cb();
    })
    .catch((e) => cb(e));
}

Promise.promisifyAll(module.exports);
