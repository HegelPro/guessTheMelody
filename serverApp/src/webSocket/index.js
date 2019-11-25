const socketIo = require('socket.io')

const sessionMiddleware = require('../server/middlewares/sessionMiddleware')

const { connection: lobbyConnection } = require('./lobbySocket/events')
const { connection: gameConnection } = require('./gameSocket/events')

const { SOCKETS } = require('./config')


module.exports.connectWebSocket = server => {
  const sio = socketIo(server)
  
  sio
    .of(SOCKETS.lobby.path)
    .use((socket, next) => sessionMiddleware(socket.request, {}, next))
    .use((socket, next) => {
      if(socket.request.session.account) {  // TODO если заходить без сессии не будет аккаунта
        const { _id, __v, password, ...account } = socket.request.session.account
        socket.vars = { account: {id: _id, ...account} }
      }
      next()
    })
    .on('connection', lobbyConnection)

  const gameSio = sio.of(SOCKETS.game.path)
  gameSio.on('connection', gameConnection)
}
  
    
    

