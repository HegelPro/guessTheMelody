const EventEmitter = require('events').EventEmitter

const {
  createAction, // TODO Unneeded
  createErrorAction,
  createSuccessAction,
} = require('./utils')


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
      super.on(name + '/req', cb)
    }

    this.emit = (name, data) =>
      this.socket.send(createAction(name, data))  // TODO Unneeded
    
    this.suc = (name, data) => {
      this.socket.send(createSuccessAction(name, data))
    }

    this.err = (name, data) => {
      this.socket.send(createErrorAction(name, data))
    }
  }
}

module.exports = SioEmitter