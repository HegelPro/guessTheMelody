const Lobby = require('../lobby')

class Lobbies {
  constructor() {
    this.lobbies = []
  }

  get() {
    return this.lobbies
  }

  getLobby(lobbyId) {
    return this.lobbies.find(({ id }) => id === lobbyId)
  }

  setLobby(lobby) {
    this.lobbies.push(lobby)
  }

  createLobby(options) {
    const lobby = Lobby.create(options)
    this.setLobby(lobby)
    return lobby
  }
}

module.exports = new Lobbies()