const { Record } = require('immutable')

class Player extends Record({
  id: null
}) {
  constructor(...args) {
    super({
      id: Math.random(),
      ...args,
    })
  }
}

module.exports = Player