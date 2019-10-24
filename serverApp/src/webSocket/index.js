const socketIo = require('socket.io')

const { connection } = require('./events')
const { SOCKETS } = require('./config')

const session = require('../server/session')


module.exports.connectWebSocket = server => {
  const sio = socketIo(server)

  // use for add session
  sio.use((socket, next) => session(socket.request, {}, next))
  
  sio
    .of(SOCKETS.game.path)
    .on('connection', socket => connection(socket))
}
  
    
    

