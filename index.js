var fs = require('fs');

var Filter = require('broccoli-filter')
var emberScript = require('ember-script')

module.exports = EmberScriptFilter
EmberScriptFilter.prototype = Object.create(Filter.prototype)
EmberScriptFilter.prototype.constructor = EmberScriptFilter
function EmberScriptFilter (inputTree, options) {
  if (!(this instanceof EmberScriptFilter)) return new EmberScriptFilter(inputTree, options)
  Filter.call(this, inputTree, options)
  options = options || {}
  this.bare = options.bare
}

EmberScriptFilter.prototype.extensions = ['em']
EmberScriptFilter.prototype.targetExtension = 'js'

EmberScriptFilter.prototype.processString = function (string) {
  var emberScriptOptions = { bare: this.bare, js: true, optimise: false }
  try {
    var json;
    if (!fs.existsSync('.emberscriptrc')) {
      return emberScript.em2js(string, emberScriptOptions)
    }

    json = fs.readFileSync('.emberscriptrc', 'utf8');
    json = JSON.parse(json);
    return emberScript.em2js(string, json)
  } catch (err) {
    err.line = err.location && err.location.first_line
    err.column = err.location && err.location.first_column
    throw err
  }
}
