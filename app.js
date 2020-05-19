"use strict";
let _ = require("lodash");
var SwaggerExpress = require("swagger-express-mw");
var app = require("express")();
// module.exports = app; // for testing

// // ENV Config
const devConfig = require("./config/dev_config.json");
const prodConfig = require("./config/prod_config.json");
const envConfig = process.env.NODE_ENV ? devConfig : prodConfig;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var config = (app.config = {
  appRoot: __dirname, // required config
})
SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) {
    throw err;
  }

  _.assignIn(app.config, swaggerExpress.runner.config);
  app.config.debug = envConfig.serverConfig.debug;
  app.config.logger = {
    dir: envConfig.serverConfig.logDir,
    level: envConfig.serverConfig.logLevel,
  };

  app.use((req, res, next) => {
    if(process.env.EMAIL && process.env.PASSWORD ) {
      req.mail = {
        email: process.env.EMAIL,
        password: process.env.PASSWORD
      }
    }

    if(process.env.STRIPE_SECRET_KEY) {
      req.stripeSecretKey = process.env.STRIPE_SECRET_KEY
    }
    next();
  });
  // Create log
  require("./middlewares/logger").init(app);

  // Database connection
  // require("./middlewares/dbconnect");

  // install middleware
  swaggerExpress.register(app);


  // Error Handler
  require("./middlewares/error-handler").init(app);

  const port = process.env.PORT || 3000;
  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${port}`);
  });
});
