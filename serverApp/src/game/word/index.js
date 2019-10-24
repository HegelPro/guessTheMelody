const Letter = require('./letter')

class Word {
  constructor() {
    this.value = []
  }
  set(wordString) {
    this.value = wordString.split('').map(char => new Letter(char))
  }

  get() {
    return this.value.map(letter => letter.toChar())
  }

  _showLetter(id) {
    this.value[id].show()
  }

  showRandomLetter() {
    // может попадать в одно итоже место
    const idRandomLetter = Math.floor(Math.random() * (this.value.length))
    this._showLetter(idRandomLetter)
  }
}

module.exports = Word