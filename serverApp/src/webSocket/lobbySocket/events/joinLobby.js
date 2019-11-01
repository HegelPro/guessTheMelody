const lobbies = require('../../../game/lobbies')


module.exports = emitter => function(lobbyId) {
  emitter.emit('joinLobby', lobbies.getLobby(lobbyId))
}