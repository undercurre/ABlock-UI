"use strict";
const index = require("./index2.js");
const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp;
};
const Button = withInstall(index);
module.exports = Button;
