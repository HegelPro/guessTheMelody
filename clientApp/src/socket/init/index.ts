import socketIo from 'socket.io-client'

import { store } from '../../store'
import rootActions from '../../store/actions'

interface IInitParams {
  port: string
  path: string
}

export default ({
  port,
  path,
}: IInitParams) => {
  const gameSocket = socketIo(`http://localhost:${port}${path}`)

  gameSocket.on('error', (e: any) => {
    store.dispatch(rootActions.error.setErrorAction(e))
  })

  gameSocket.on('message', (action: any) => {
    store.dispatch(action)
  })

  return gameSocket
}