const { Record, List } = require('immutable')
const WaitRoom = require('../waitRoom')


class GameServer extends Record({
  waitRoom: new WaitRoom(),
  Lobbys: List()
}) {
  addLobby(Lobby) {
    return this
      .update('Lobbys', Lobbys => Lobbys.push(Lobby))
  }

  connectPlayer(player) {
    return this
      .update('waitRoom', waitRoom => waitRoom.connectPlayer(player))
  }

  disconnectPlayer(player) {
    return this
      .update('waitRoom', waitRoom => waitRoom.disconnectPlayer(player))
      .update('Lobbys', Lobbys => Lobbys.map(Lobby => Lobby.disconnectPlayer(player)))  
  }
}

module.exports = GameServer