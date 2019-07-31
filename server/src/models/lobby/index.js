class Lobby {
  constructor() {
    this.id = Math.random()
    this.minPlayers = 0
    this.maxPlayers = 0
    this.password = ''
    this.players = []
  }
  connectPlayer(player) {
    this.players.push(player)
  }

  disconnectPlayer(player) {
    this.players.filter(({ id }) => id !== player.id)
  }
}

module.exports = Lobby