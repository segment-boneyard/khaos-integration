{{#identify}}

/**
 * Map identify.
 *
 * @param {Identify} identify
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.identify = function(identify, settings){
  return identify.json();
};
{{/identify}}{{#track}}

/**
 * Map track
 *
 * @param {Track} track
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.track = function(track, settings){
  return track.json();
};
{{/track}}{{#page}}

/**
 * Map page.
 *
 * @param {Page} page
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.page = function(page, settings){
  return page.json();
};
{{/page}}{{#group}}

/**
 * Map group.
 *
 * @param {Group} group
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.group = function(group, settings){
  return group.json();
};
{{/group}}{{#alias}}

/**
 * Map alias.
 *
 * @param {Alias} alias
 * @param {Object} settings
 * @return {Object}
 * @api private
 */

exports.alias = function(alias, settings){
  return alias.json();
};
{{/alias}}