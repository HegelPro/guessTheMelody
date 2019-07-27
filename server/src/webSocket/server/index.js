const socketConfig = require('../../../../client/src/config/socket.json')

const server = require('http').createServer()

server.listen(socketConfig.port)

module.exports = server