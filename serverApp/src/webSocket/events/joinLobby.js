const lobbies = require('../../game/lobbies')


module.exports = emitter => lobbyId => {
  console.log('getLobbyList')

  emitter.emit('joinLobby', lobbies.getLobby(lobbyId))
}