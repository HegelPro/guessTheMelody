const Game = require('../../game')


module.exports = sioEmitter => () => {
  console.log('startGame')
  const newGame = new Game()
  
  newGame.word.set('kok')
  newGame.word.showRandomLetter()

  sioEmitter.emit('startGame', newGame.toClient())
}