const {
  Record,
  List,
} = require('immutable')

const defaultLobbyConfig = {
  id: null,
  minPlayers: 0,
  maxPlayers: 0,
  password: null,
  players: List(),
}

class Lobby extends Record(defaultLobbyConfig) {
  constructor(...args) {
    super({
      id: Math.random(),
      ...args,
    })
  }
  connectPlayer(player) {
    return this
      .update('players', players => players.push(player))
  }

  disconnectPlayer(player) {
    return this
      .update('players', players => players.filter(({ id }) => id !== player.id))  
  }
}

/*
let lol = new Lobby()
const player = new Player()
console.log(lol.players.toJS())
lol = lol.connectPlayer(player)
console.log(lol.players.toJS())
lol = lol.disconnectPlayer(player)
console.log(lol.players.toJS())
*/

module.exports = Lobby