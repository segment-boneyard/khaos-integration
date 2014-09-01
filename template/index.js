
var Integration = require('segmentio-integration');
{{#mapper}}var mapper = require('./mapper');{{/mapper}}

/**
 * Expose `{{basename}}`
 *
 * {{docs}}
 */

var {{basename}} = module.exports = integration('{{basename}}')
  .endpoint('{{endpoint}}'){{#mapper}}
  .mapper(mapper){{/mapper}}
  .retries(2);

{{#identify}}

/**
 * Identify.
 *
 * {{docs}}
 *
 * @param {{#if mapper}}{Object}{{else}}{Facade}{{/if}} {{#if mapper}}payload{{else}}identify{{/if}}
 * @param {Object} settings
 * @param {Function} fn
 * @api public
 */

{{basename}}.prototype.identify = function({{#if mapper}}payload{{else}}identify{{/if}}, settings, fn){
  {{#unless mapper}}var payload = identify.json();{{/unless}}
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
 * @param {Object} settings
 * @param {Function} fn
 * @api public
 */

{{basename}}.prototype.track = function({{#if mapper}}payload{{else}}track{{/if}}, settings, fn){
  {{#unless mapper}}var payload = track.json();{{/unless}}
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
 * @param {Object} settings
 * @param {Function} fn
 * @api public
 */

{{basename}}.prototype.page = function({{#if mapper}}payload{{else}}page{{/if}}, settings, fn){
  {{#unless mapper}}var payload = page.json();{{/unless}}
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
 * @param {Object} settings
 * @param {Function} fn
 * @api public
 */

{{basename}}.prototype.group = function({{#if mapper}}payload{{else}}group{{/if}}, settings, fn){
  {{#unless mapper}}var payload = group.json();{{/unless}}
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
 * @param {Object} settings
 * @param {Function} fn
 * @api public
 */

{{basename}}.prototype.alias = function({{#if mapper}}payload{{else}}alias{{/if}}, settings, fn){
  {{#unless mapper}}var payload = alias.json();{{/unless}}
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
{{/alias}}
