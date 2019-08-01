import { combineReducers } from 'redux'

import error from '../Containers/ErrorNotification/reducer'
import lobby from '../Containers/Lobby/reducer'
import lobbyList from '../Containers/LobbyList/reducer'

const rootReducer = combineReducers({
  error,
  lobby,
  lobbyList,
})

export default rootReducer