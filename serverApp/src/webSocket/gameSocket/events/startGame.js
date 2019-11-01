const Game = require('../../../game')

const Song = require('../../../db/models/song')


module.exports = sioEmitter => async function() {
  // sioEmitter.socket.join(newGame.id) // TODO need in furter

  const songs = await Song.find()
  let randSong = songs[Math.floor(Math.random() * songs.length)]
  const newGame = new Game({
    song: randSong,
  })

  this.socket.game = newGame

  let counter = 0 // bad
  const showLetterFunc = () => {
    try {
      newGame.word.showRandomLetter()

      sioEmitter.emit('showLetter', newGame.word.value)
      if (counter < 5) { // bad
        counter++ // bad
        setTimeout(showLetterFunc, 1000) // bad
      }
    } catch (error) {}
  }
  setTimeout(showLetterFunc, 1000)

  sioEmitter.emit('startGame', newGame.toClient())
}