const Player = require('../../game/player')

const EVENTS = require('../config').SOCKETS.game.events

const createLobby = require('./createLobby')
const getLobbyList = require('./getLobbyList')
const startGame = require('./startGame')
const guessWord = require('./guessWord')
const joinLobby = require('./joinLobby')

const SioEmitter = require('../emitter')


module.exports.connection = socket => {
  console.log('Socket is connected!')

  const sioEmitter = new SioEmitter(socket)

  if (socket.request.session.account) {
    socket.player = new Player({
      account: socket.request.session.account,
    })
  }

  sioEmitter.on(EVENTS.createLobby, createLobby(sioEmitter))
  sioEmitter.on(EVENTS.getLobbyList, getLobbyList(sioEmitter))
  sioEmitter.on(EVENTS.startGame, startGame(sioEmitter))
  sioEmitter.on(EVENTS.guessWord, guessWord(sioEmitter))
  sioEmitter.on(EVENTS.joinLobby, joinLobby(sioEmitter))

  socket.on('error', () => console.log('error'))
  socket.on('connect', () => console.log('connect'))
  socket.on('disconnect', () => console.log('disconnect'))
  socket.on('disconnecting', () => console.log('disconnecting'))
}