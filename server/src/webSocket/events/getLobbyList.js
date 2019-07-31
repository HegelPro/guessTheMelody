const gameServer = require('../../models/gameServer')

module.exports = clientCb => {
  console.log('getLobbyList')
  clientCb(gameServer.lobbys)
}