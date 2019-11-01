import socketIo from 'socket.io-client'

import { store } from '../../store'
import rootActions from '../../store/actions'

import {
  PORT,
  SOCKETS,
} from '../../config'


export default () => {
  const gameSocket = socketIo(`http://localhost:${PORT}${SOCKETS.game.path}`)

  gameSocket.on('error', (e: any) => {
    store.dispatch(rootActions.error.setErrorAction(e))
  })

  gameSocket.on('message', (action: any) => {
    store.dispatch(action)
  })

  return gameSocket
}