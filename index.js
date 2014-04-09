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
  var emberScriptOptions = { bare: this.bare }
  try {
    return emberScript.compile(string, emberScriptOptions)
  } catch (err) {
    err.line = err.location && err.location.first_line
    err.column = err.location && err.location.first_column
    throw err
  }
}
