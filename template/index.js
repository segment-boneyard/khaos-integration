
var Integration = require('segmentio-integration');
{{#mapper}}var mapper = require('./mapper');{{/mapper}}

/**
 * Expose `{{basename}}`
 */

var {{basename}} = module.exports = integration('{{basename}}')
  .endpoint('{{endpoint}}'){{#mapper}}
  .mapper(mapper){{/mapper}}
  .retries(2);

/**
 * Validate.
 *
 * @param {Facade} message
 * @param {Object} settings
 * @return {Error}
 * @api public
 */

{{basename}}.prototype.validate = function(message, settings){
  return this.ensure(settings.apiKey, 'apiKey');
};

/**
 * Identify.
 *
 * {{docs}}
 *
 * @param {Object} payload
 * @param {Object} settings
 * @param {Function} fn
 * @api public
 */

{{basename}}.prototype.identify = function(payload, settings, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Track.
 *
 * {{docs}}
 *
 * @param {Object} payload
 * @param {Object} settings
 * @param {Function} fn
 * @api public
 */

{{basename}}.prototype.track = function(payload, settings, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Page.
 *
 * {{docs}}
 *
 * @param {Object} payload
 * @param {Object} settings
 * @param {Function} fn
 * @api public
 */

{{basename}}.prototype.page = function(payload, settings, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Group.
 *
 * {{docs}}
 *
 * @param {Object} payload
 * @param {Object} settings
 * @param {Function} fn
 * @api public
 */

{{basename}}.prototype.group = function(payload, settings, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Track.
 *
 * {{docs}}
 *
 * @param {Object} payload
 * @param {Object} settings
 * @param {Function} fn
 * @api public
 */

{{basename}}.prototype.alias = function(payload, settings, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};