const Lobbies = require('../../game/lobbies')

module.exports = emitter => () => {
  console.log('createLobby')

  const newLobby = Lobbies.createLobby({
    owner: emitter.socket.player
  })

  emitter.emit('createLobby', newLobby)
}