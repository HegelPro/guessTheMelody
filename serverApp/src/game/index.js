const Word = require('./word')

class Game {
  constructor() {
    this.word = new Word()
  }

  toClient() {
    return {
      word: this.word.value
    }
  }
}

module.exports = Game