const Game = require('../../../game')

const events = require('../../config').SOCKETS.game.events


module.exports = sioEmitter => async function(word) {
  if (word && this.socket.game.word.get() === word) {
    sioEmitter.emit(events.guessSong, true)
  } else {}
}