const Word = require('./word')

class Game {
  constructor({
    word = new Word(),
    song = {},
  }) {
    this.id = Math.random()
    this.song = song
    this.word = word
    this.word.set(this.song.author)
  }

  toClient() {
    return {
      word: this.word.value,
      song: this.song,
    }
  }
}

module.exports = Game