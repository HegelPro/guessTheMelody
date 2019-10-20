const socketIo = require('socket.io')
const server = require('./server/init')

const webSocket = config => socketIo(server(config))

module.exports = webSocket