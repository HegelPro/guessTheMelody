class Letter {
  constructor(char) {
    this.char = char
    this.isHiden = true
  }

  show() {
    this.isHiden = false
  }

  toChar() {
    return this.char
  }
}

module.exports = Letter