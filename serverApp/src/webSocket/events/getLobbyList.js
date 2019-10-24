const lobbies = require('../../game/lobbies')

module.exports = emitter => () => {
  console.log('getLobbyList')

  emitter.emit('getLobbyList', lobbies.get())
}