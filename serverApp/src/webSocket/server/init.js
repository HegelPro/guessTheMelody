const server = require('http').createServer()

module.exports = config => {
    server.listen(config.port)
    return server
}