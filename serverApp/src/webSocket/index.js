const socketIo = require('socket.io')

const { connection: lobbyConnection } = require('./lobbySocket/events')
const { connection: gameConnection } = require('./gameSocket/events')

const { SOCKETS } = require('./config')


module.exports.connectWebSocket = server => {
  const sio = socketIo(server)
  
  const lobbySio = sio.of(SOCKETS.lobby.path)
  lobbySio.on('connection', lobbyConnection)

  const gameSio = sio.of(SOCKETS.game.path)
  gameSio.on('connection', gameConnection)
}
  
    
    

