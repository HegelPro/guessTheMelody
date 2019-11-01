const lobbies = require('../../../game/lobbies')

module.exports = emitter => function() {
  emitter.emit('getLobbyList', lobbies.get())
}