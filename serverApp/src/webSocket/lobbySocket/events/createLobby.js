const Lobbies = require('../../../game/lobbies')
const Player = require('../../../game/player')


module.exports = emitter => function(options) {
  const { account } = this.socket.vars
  const ownerPlayer = new Player({ account })
  const newLobby = Lobbies.createLobby({
    ...options,
    owner: ownerPlayer,
  })
  emitter.emit('createLobby', newLobby)
}