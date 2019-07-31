const { connection } = require('./webSocket/events')
const cookie = require('cookie')

const webSocket = require('./webSocket/init')

const db = require('./firabase')

webSocket
  .use((socket, next) => {
    const clientCookie = cookie.parse(socket.request.headers.cookie)
    if(!clientCookie._uid) {
      next(new Error('You haven\'t user id!'))
    } else {
      next()
    }
  })

webSocket
  .of('/game')
  .on('connection', connection)