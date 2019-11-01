class Letter {
  constructor(char) {
    this.char = char
    this.isHidden = true
  }

  show() {
    this.isHidden = false
  }

  toChar() {
    return this.char
  }
}

module.exports = Letter