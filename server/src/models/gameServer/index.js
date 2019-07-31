const WaitRoom = require('../waitRoom')

class GameServer {
  constructor() {
    this.waitRoom = new WaitRoom()
    this.lobbys = []
  }
  addLobby(lobby) {
    this.lobbys.push(lobby)
  }

  connectPlayer(player) {
    this.lobbys.waitRoom.connectPlayer(player)
  }

  disconnectPlayer(player) {
    this.lobbys.waitRoom.disconnectPlayer(player) 
  }

  getLobby(id) {
    return this.lobbys.find((lobby) => id ==lobby.id)
  }
}

module.exports = new GameServer()