const { connection } = require('./webSocket/events')
const cookie = require('cookie')

require('./configServer')

const axios = require('axios')

async function start() {
  const socketConfigRequest = await axios.get('http://localhost:4000/configs/socket')
  const socketConfig = socketConfigRequest.data
  const webSocket = require('./webSocket/init')(socketConfig)

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
    .of(socketConfig.sockets.game.path)
    .on('connection', socket => connection(socket, socketConfig))
}

start()