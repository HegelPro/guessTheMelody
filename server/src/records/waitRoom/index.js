const { Record, List } = require('immutable')

class WaitRoom extends Record({
  players: List()
}) {
  connectPlayer(player) {
    return this
      .update('players', players => players.push(player))
  }

  disconnectPlayer(player) {
    return this
      .update('players', players => players.filter(({ id }) => id !== player.id))  
  }
}

module.exports = WaitRoom