class Player {
  constructor({
    account,
    id,
  }) {
    this.id = id || Math.random()
    this.account = account || null
  }
}

module.exports = Player