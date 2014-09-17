
/**
 * Module dependencies.
 */

var integration = require('segmentio-integration');
var mapper = require('./mapper');

/**
 * Expose `integration`
 *
 * https://example.com/docs
 */

var Integration = module.exports = integration('Integration')
  .channels(['server', 'mobile', 'client'])
  .endpoint('https://api.example.com/v1')
  .ensure('settings.apiKey')
  .mapper(mapper)
  .retries(2);

/**
 * Identify.
 *
 * https://example.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Integration.prototype.identify = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Track.
 *
 * https://example.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Integration.prototype.track = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Page.
 *
 * https://example.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Integration.prototype.page = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Screen.
 *
 * https://example.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Integration.prototype.screen = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Group.
 *
 * https://example.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Integration.prototype.group = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Alias.
 *
 * https://example.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Integration.prototype.alias = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
