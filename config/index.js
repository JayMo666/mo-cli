"use strict";
var _ = require("lodash");
var path = require("path");
var envConfig = {};

try {
  envConfig = require("./config.js");
} catch (e) {
  // do nothing
}

var defaultConfig = {
  templateUrl: "",
  root: path.join(__dirname, "../"),
  cacheDir: "tmp_cache",
};

var config = _.merge({}, defaultConfig, envConfig);

module.exports = config;
