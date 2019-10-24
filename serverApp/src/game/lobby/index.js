class Lobby {
  constructor({
    id,
    minPlayers,
    maxPlayers,
    password,
    ownerId,
  }) {
    this.id = id
    this.minPlayers = minPlayers
    this.maxPlayers = maxPlayers
    this.password = password
    this.ownerId = ownerId
    this.players = []
  }
  connectPlayer(player) {
    this.players.push(player)
  }

  disconnectPlayer(player) {
    this.players.filter(({ id }) => id !== player.id)
  }

  static create({
    minPlayers = 0,
    maxPlayers = 0,
    password = '',
    ownerId = null,
  }) {
    const generatedId = Math.random()
    return new Lobby({
      id: generatedId,
      minPlayers,
      maxPlayers,
      password,
      ownerId,
    })
  }
}

module.exports = Lobby