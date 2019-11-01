const EVENTS = require('../../config').SOCKETS.game.events

const startGame = require('./startGame')
const guessSong = require('./guessSong')

const SioEmitter = require('../../emitter')


module.exports.connection = socket => {
  console.log('Socket is connected!')

  const sioEmitter = new SioEmitter(socket)

  sioEmitter.on(EVENTS.startGame, startGame(sioEmitter))
  sioEmitter.on(EVENTS.guessSong, guessSong(sioEmitter))

  socket.on('error', () => console.log('error'))
  socket.on('connect', () => console.log('connect'))
  socket.on('disconnect', () => console.log('disconnect'))
  socket.on('disconnecting', () => console.log('disconnecting'))
}