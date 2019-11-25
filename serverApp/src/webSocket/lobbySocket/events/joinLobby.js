const lobbies = require('../../../game/lobbies')
const Player = require('../../../game/player')


module.exports = emitter => function({
  password,
  id,
}) {
  try {
    const { account } = this.socket.vars
    const newPlayer = new Player({ account })
    lobbies.joinLobby({
      id,
      options: {
        player: newPlayer,
        password,
      }
    })
    emitter.suc('joinLobby', lobbies.getLobby(id))
  } catch (error) {
    emitter.err('joinLobby')
  }
}