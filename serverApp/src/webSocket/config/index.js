module.exports.SOCKETS = {
  game: {
    path: '/game',
    events: {
      createLobby: 'createLobby',
      getLobbyList: 'getLobbyList',
      startGame: 'startGame',
      joinLobby: 'joinLobby'
    }
  }
}

module.exports.PORT = 2000