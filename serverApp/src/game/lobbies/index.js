const Lobby = require('../lobby')

class Lobbies {
  constructor() {
    this.lobbies = []
  }

  get() {
    return this.lobbies.map(lobby => lobby.toClient())
  }

  getLobby(lobbyId) {
    return this.lobbies.find(({ id }) => id === lobbyId)
  }

  setLobby(lobby) {
    this.lobbies.push(lobby)
  }

  joinLobby({
    id,
    options,
  }) {
    const lobby = this.getLobby(id)
    lobby.join(options)
  }

  createLobby(options) {
    const lobby = Lobby.create(options)
    lobby.connectPlayer(options.owner)
    this.setLobby(lobby)
    return lobby
  }
}

module.exports = new Lobbies()