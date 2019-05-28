const sampleRoutes = require("./sampleRoutes");

let homeRoute = "/";

module.exports = app => {
  app.get(homeRoute, sampleRoutes.homeRoute);

  // More routes here!
};
