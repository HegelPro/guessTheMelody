module.exports.SOCKETS = {
  lobby: {
    path: '/lobby',
    events: {
      createLobby: 'createLobby',
      getLobbyList: 'getLobbyList',
      joinLobby: 'joinLobby'
    }
  },
  game: {
    path: '/game',
    events: {
      startGame: 'startGame',
      guessSong: 'guessSong'
    }
  }
}