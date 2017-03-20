const JSON5 = require('json5')

module.exports = function (json) {
  if (typeof json === 'object') json = JSON5.stringify(json)
  try {
    return JSON5.parse(json)
  } catch (e) {
    return false
  }
}
