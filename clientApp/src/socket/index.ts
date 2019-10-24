import socket from './game/initSocket'

import { store } from '../store'
import rootActions from '../store/actions'

socket.on('error', (e: any) => {
  store.dispatch(rootActions.error.setErrorAction(e))
})

socket.on('message', (action: any) => {
  store.dispatch(action)
})

export default socket