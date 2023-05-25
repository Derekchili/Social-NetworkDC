// this is importing methods and exporting them
const userMethods = require('./users')
const thoughtMethods = require('./thoughts')
const friendMethods = require('./user-friends')
const reactMethods = require('./thought-react')

module.exports = { userMethods, thoughtMethods, friendMethods, reactMethods }