const Letter = require('./letter')

class Word {
  constructor() {
    this.value = []
  }
  set(wordString) {
    this.value = wordString.split('').map(char => new Letter(char))
  }

  get() {
    return this.value.map(letter => letter.toChar()).reduce((res, char) => res + char, '')
  }

  showRandomLetter() {
    // может попадать в одно итоже место
    const isNotHiddenLetters = this.value.filter(letter  => letter.isHidden)

    if (isNotHiddenLetters.length > 0) {
      const idRandomLetter = Math.floor(Math.random() * isNotHiddenLetters.length)
      isNotHiddenLetters[idRandomLetter].isHidden = false
    } else {
      throw new Error('All letters is open')
    }
  }
}

module.exports = Word