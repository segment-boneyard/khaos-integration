
var integration = require('segmentio-integration');
var mapper = require('./mapper');

/**
 * Expose `some-integration`
 *
 * http://some-integration.com/docs
 */

var SomeIntegration = module.exports = integration('Some Integration')
  .endpoint('http://api.some-integration.com/v1')
  .ensure('settings.apiKey')
  .mapper(mapper)
  .retries(2);


/**
 * Identify.
 *
 * http://some-integration.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

SomeIntegration.prototype.identify = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};


/**
 * Track.
 *
 * http://some-integration.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

SomeIntegration.prototype.track = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};


/**
 * Page.
 *
 * http://some-integration.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

SomeIntegration.prototype.page = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};


/**
 * Group.
 *
 * http://some-integration.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

SomeIntegration.prototype.group = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Alias.
 *
 * http://some-integration.com/docs
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

SomeIntegration.prototype.alias = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
