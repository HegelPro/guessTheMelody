const { Record, List } = require('immutable')

class WaitRoom {
  constructor() {
    this.players = []
  }
  connectPlayer(player) {
    this.players.push(player)
  }

  disconnectPlayer(player) {
    this.players.filter(({ id }) => id !== player.id)
  }
}

module.exports = WaitRoom