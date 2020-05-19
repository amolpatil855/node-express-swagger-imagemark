"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "<DB_URL>",
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: true,
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Error while connecting to Database", err);
  });

module.exports = sequelize;