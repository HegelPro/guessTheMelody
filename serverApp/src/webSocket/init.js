const socketIo = require('socket.io')
const server = require('./server/init')

const webSocket = socketIo(server)

module.exports = webSocket