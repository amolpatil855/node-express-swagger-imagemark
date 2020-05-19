"use strict";

let subscribeService = require('../../services/subscribe');

module.exports = {
  subscribe: subscribe,
};

function subscribe(req, res, next) {
  let data = {
    token: {
      card: {
        name: req.body.first_name + " " + req.body.last_name
      },
      email: req.body.email
    }
  }
  subscribeService
    .sendSubscribeMailAsync(req.mail, data)
    .then(() => {
      res.json({
        message: "Subcribe plane successfully.",
      });
    })
    .catch(next);
}
