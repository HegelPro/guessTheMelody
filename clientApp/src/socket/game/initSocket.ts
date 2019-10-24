import socketIo from 'socket.io-client'

import {
  PORT,
  SOCKETS,
} from '../../config'

export default socketIo(`http://localhost:${PORT}${SOCKETS.game.path}`)