'use strict';

module.exports = {
  /**
   * validate data with rules
   *
   * @param  {Object} rules  - validate rule object, see [jsonschema](https://github.com/tdegrunt/jsonschema)
   * @param  {Object} [data] - validate target, default to `this.request.body`
   */
  validate(rules, data) {
    data = data || this.request.body;
    const { errors = [] } = this.app.validator.validate(data, rules);
    if (errors && errors.length) {
      this.throw(422, 'Validation Failed', {
        code: 'invalid_param',
        errors,
      });
    }
  },
};
