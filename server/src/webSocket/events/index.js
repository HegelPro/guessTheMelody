const gameEvents = require('../../../../client/src/config/socket.json').sockets.game.events

const createLobby = require('./createLobby')
// const Player = new require('../player')
// const GameServer = require('../gameServer')
// let gameServer = new GameServer()

module.exports.connection = server => socket => {
  console.log('Socket is connected!')
  // const newPlayer = new Player({ socket })
  // let gameServer = gameServer.connectPlayer(newPlayer)
  // gameServer = gameServer.connectPlayer(newPlayer)
  socket.on(gameEvents.createLobby, createLobby(server))
  socket.on('error', () => console.log('error'))
  socket.on('connect', () => console.log('connect'))
  socket.on('disconnect', () => console.log('disconnect'))
  socket.on('disconnecting', () => console.log('disconnecting'))
}