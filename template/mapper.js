{{#identify}}

/**
 * Map identify.
 *
 * @param {Identify} identify
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.identify = function(identify){
  return identify.json();
};{{/identify}}{{#track}}

/**
 * Map track
 *
 * @param {Track} track
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.track = function(track){
  return track.json();
};{{/track}}{{#page}}

/**
 * Map page.
 *
 * @param {Page} page
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.page = function(page){
  return page.json();
};{{/page}}{{#screen}}

/**
 * Map screen.
 *
 * @param {Screen} screen
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.screen = function(screen){
  return screen.json();
};{{/screen}}{{#group}}

/**
 * Map group.
 *
 * @param {Group} group
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.group = function(group){
  return group.json();
};{{/group}}{{#alias}}

/**
 * Map alias.
 *
 * @param {Alias} alias
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.alias = function(alias){
  return alias.json();
};{{/alias}}
