
var integration = require('segmentio-integration');
{{#mapper}}var mapper = require('./mapper');{{/mapper}}

/**
 * Expose `{{basename}}`
 *
 * {{docs}}
 */

var {{pascalcase basename}} = module.exports = integration('{{capitalcase basename}}')
  .endpoint('{{endpoint}}'){{#mapper}}
  .ensure('settings.apiKey')
  .mapper(mapper){{/mapper}}
  .retries(2);

{{#identify}}

/**
 * Identify.
 *
 * {{docs}}
 *
 * @param {{#if mapper}}{Object}{{else}}{Facade}{{/if}} {{#if mapper}}payload{{else}}identify{{/if}}
 * @param {Function} fn
 * @api public
 */

{{pascalcase basename}}.prototype.identify = function({{#if mapper}}payload{{else}}identify{{/if}}, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
{{/identify}}{{#track}}

/**
 * Track.
 *
 * {{docs}}
 *
 * @param {{#if mapper}}{Object}{{else}}{Facade}{{/if}} {{#if mapper}}payload{{else}}track{{/if}}
 * @param {Function} fn
 * @api public
 */

{{pascalcase basename}}.prototype.track = function({{#if mapper}}payload{{else}}track{{/if}}, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
{{/track}}{{#page}}

/**
 * Page.
 *
 * {{docs}}
 *
 * @param {{#if mapper}}{Object}{{else}}{Facade}{{/if}} {{#if mapper}}payload{{else}}page{{/if}}
 * @param {Function} fn
 * @api public
 */

{{pascalcase basename}}.prototype.page = function({{#if mapper}}payload{{else}}page{{/if}}, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
{{/page}}{{#group}}

/**
 * Group.
 *
 * {{docs}}
 *
 * @param {{#if mapper}}{Object}{{else}}{Facade}{{/if}} {{#if mapper}}payload{{else}}group{{/if}}
 * @param {Function} fn
 * @api public
 */

{{pascalcase basename}}.prototype.group = function({{#if mapper}}payload{{else}}group{{/if}}, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
{{/group}}{{#alias}}
/**
 * Alias.
 *
 * {{docs}}
 *
 * @param {{#if mapper}}{Object}{{else}}{Facade}{{/if}} {{#if mapper}}payload{{else}}alias{{/if}}
 * @param {Function} fn
 * @api public
 */

{{pascalcase basename}}.prototype.alias = function({{#if mapper}}payload{{else}}alias{{/if}}, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
{{/alias}}
