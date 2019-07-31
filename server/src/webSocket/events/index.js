const gameEvents = require('../../../../client/src/config/socket.json').sockets.game.events

const createLobby = require('./createLobby')
const getLobbyList = require('./getLobbyList')
const startGame = require('./startGame')

module.exports.connection = socket => {
  console.log('Socket is connected!')

  socket.on(gameEvents.createLobby, createLobby)
  socket.on('getLobbyList', getLobbyList)
  socket.on('startGame', startGame(socket))
  socket.on('error', () => console.log('error'))
  socket.on('connect', () => console.log('connect'))
  socket.on('disconnect', () => console.log('disconnect'))
  socket.on('disconnecting', () => console.log('disconnecting'))
}