// const gameEvents = require('../../configServer/config/socket.json.js').sockets.game.events

const createLobby = require('./createLobby')
const getLobbyList = require('./getLobbyList')
const startGame = require('./startGame')

module.exports.connection = (socket, socketConfig) => {
  console.log('Socket is connected!')
  console.log(socketConfig)

  socket.on('createLobby', createLobby)
  socket.on('getLobbyList', getLobbyList)
  socket.on('startGame', startGame(socket))
  socket.on('error', () => console.log('error'))
  socket.on('connect', () => console.log('connect'))
  socket.on('disconnect', () => console.log('disconnect'))
  socket.on('disconnecting', () => console.log('disconnecting'))
}