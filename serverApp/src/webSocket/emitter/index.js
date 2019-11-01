const EventEmitter = require('events').EventEmitter

const { createAction } = require('./utils')


class SioEmitter extends EventEmitter {
  constructor(socket) {
    super()
    this.socket = socket
    
    this.socket.on('message', ({
      type,
      payload,
    }) => {
      super.emit(type, payload)
    })

    this.on = (name, cb) => {
      super.on(name + '/request', cb)
    }

    this.emit = (name, data) =>
      this.socket.send(createAction(name, data))
  }
}

module.exports = SioEmitter