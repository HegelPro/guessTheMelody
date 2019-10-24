const configMiddlewares = require('./configMiddlewares')
const accountMiddleware = require('./accountMiddleware')


module.exports = [].concat(
  configMiddlewares,
  accountMiddleware,
)