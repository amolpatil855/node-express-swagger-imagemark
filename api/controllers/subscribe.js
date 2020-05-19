"use strict";

let subscribeService = require('../../services/subscribe');

module.exports = {
  subscribe: subscribe,
};

function subscribe(req, res, next) {
  subscribeService
    .sendSubscribeMailAsync(req.mail, req.body)
    .then(() => {
      res.json({
        message: "Subcribe plane successfully.",
      });
    })
    .catch(next);
}
