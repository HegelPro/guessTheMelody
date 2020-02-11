const Game = require('../../../game')

const Song = require('../../../db/models/song')


const func = time => time * 3/4

module.exports = sioEmitter => async function() {
  // sioEmitter.socket.join(newGame.id) // TODO need in furter

  const songs = await Song.find()
  let randSong = songs[Math.floor(Math.random() * songs.length)]
  const newGame = new Game({
    song: randSong,
  })

  this.socket.game = newGame

  let time = func(5000)
  const showLetterFunc = () => {
    time = func(time)
    try {
      newGame.word.showRandomLetter()
      sioEmitter.emit('showLetter', newGame.word.value)
      setTimeout(showLetterFunc, time)
    } catch (error) {}
  }
  setTimeout(showLetterFunc, time)

  sioEmitter.emit('startGame', newGame.toClient())
}