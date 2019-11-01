const EVENTS = require('../../config').SOCKETS.lobby.events

const createLobby = require('./createLobby')
const getLobbyList = require('./getLobbyList')
const joinLobby = require('./joinLobby')

const SioEmitter = require('../../emitter')

module.exports.connection = function(socket) {
  const sioEmitter = new SioEmitter(socket)

  sioEmitter.on(EVENTS.createLobby, createLobby(sioEmitter))
  sioEmitter.on(EVENTS.getLobbyList, getLobbyList(sioEmitter))
  sioEmitter.on(EVENTS.joinLobby, joinLobby(sioEmitter))

  socket.on('error', () => console.log('error'))
  socket.on('connect', () => console.log('connect'))
  socket.on('disconnect', () => console.log('disconnect'))
  socket.on('disconnecting', () => console.log('disconnecting'))
}