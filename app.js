'use strict';

const Validator = require('jsonschema').Validator;

module.exports = app => {
  app.validator = new Validator();
};
