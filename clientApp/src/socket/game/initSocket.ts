import socketIo from 'socket.io-client'

import socketConfig from '../../config/socket.json'

function initSocket() {
  const socket = socketIo(`http://localhost:${socketConfig.port}${socketConfig.sockets.game.path}`)
  return socket
}

const socket = initSocket()

export default socket