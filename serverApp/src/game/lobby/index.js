class Lobby {
  constructor({
    id,
    name,
    minPlayers,
    maxPlayers,
    password,
    ownerId,
  }) {
    this.id = id
    this.name = name
    this.minPlayers = minPlayers
    this.maxPlayers = maxPlayers
    this.password = password
    this.ownerId = ownerId
    this.players = []
  }

  join({
    player,
    password,
  }) {
    if(password === this.password) {
      this.connectPlayer(player)
    } else {
      throw new Error('Lobby password is wrong')
    }
  }

  connectPlayer(player) {
    this.players.push(player)
  }

  disconnectPlayer(player) {
    this.players.filter(({ id }) => id !== player.id)
  }

  static create({
    name = 'New',
    minPlayers = 0,
    maxPlayers = 0,
    password = '',
    ownerId = null,
  }) {
    const generatedId = Math.random()
    return new Lobby({
      name,
      id: generatedId,
      minPlayers,
      maxPlayers,
      password,
      ownerId,
    })
  }

  toClient() {
    const {
      password,
      ...lobby
    } = this
    return {
      withPassword: !!password,
      ...this
    }
  }
}

module.exports = Lobby