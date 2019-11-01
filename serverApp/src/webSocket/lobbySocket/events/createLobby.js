const Lobbies = require('../../../game/lobbies')

module.exports = emitter => function(options) {
  const newLobby = Lobbies.createLobby({
    ...options,
    owner: null
  })

  emitter.emit('createLobby', newLobby)
}