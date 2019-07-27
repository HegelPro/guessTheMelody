const socketIo = require('socket.io')

const webSocket = server => socketIo(server)

module.exports = webSocket