const socketConfig = require('../../config/socket.json')

const server = require('http').createServer()

server.listen(socketConfig.port)

module.exports = server
