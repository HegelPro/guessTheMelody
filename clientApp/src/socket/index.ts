import socket from './game/initSocket'

import { store } from '../store'
import rootActions from '../store/actions'

socket.on('error', (e: any) => {
  store.dispatch(rootActions.error.setErrorAction(e))
})

export default socket