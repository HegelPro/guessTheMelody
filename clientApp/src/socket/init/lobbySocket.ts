import socketIo from 'socket.io-client'

import { store } from '../../store'
import rootActions from '../../store/actions'

import {
  PORT,
  SOCKETS,
} from '../../config'



export default () => {
  const lobbySocket = socketIo(`http://localhost:${PORT}${SOCKETS.lobby.path}`)

  lobbySocket.on('error', (e: any) => {
    store.dispatch(rootActions.error.setErrorAction(e))
  })

  lobbySocket.on('message', (action: any) => {
    store.dispatch(action)
  })

  return lobbySocket
}