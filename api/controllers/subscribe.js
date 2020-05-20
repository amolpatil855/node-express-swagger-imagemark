"use strict";

let subscribeService = require('../../services/subscribe');
let commonService = require('../../services/common');
module.exports = {
  subscribe: subscribe,
};

function subscribe(req, res, next) {
  subscribeService
    .sendSubscribeMailAsync(req.mail, req.body)
    .then(() => {
      res.json(commonService.resJson('Subcribe plane successfully.', {}));
    })
    .catch(next);
}
