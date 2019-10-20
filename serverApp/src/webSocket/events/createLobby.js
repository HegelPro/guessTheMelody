const Lobby = require('../../models/lobby')
const Player = require('../../models/player')
const gameServer = require('../../models/gameServer')

module.exports = clientCb => {
  console.log('createLobby')

  const newPlayer = new Player()
  const newLobby = new Lobby()
  
  newLobby.connectPlayer(newPlayer)
  
  gameServer.addLobby(newLobby)
  
  clientCb(newLobby)
}