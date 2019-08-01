const gameServer = require('../../models/gameServer')
const Game = require('../../game')

module.exports = socket => clientCb => {
  console.log('startGame')
  const newGame = new Game()
  newGame.word.set('kok')
  newGame.word.showRandomLetter()
  clientCb(newGame)
}