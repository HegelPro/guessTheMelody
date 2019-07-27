const Lobby = require('../../records/lobby')
const Player = new require('../../records/player')

module.exports = server => clientCallback => {
  console.log('createLobby')
  const newPlayer = new Player()
  let newLobby = new Lobby()
  newLobby = newLobby.connectPlayer(newPlayer)
  clientCallback(newLobby.toJS())
  // gameServer.addLoby()
}