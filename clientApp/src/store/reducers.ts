import { combineReducers } from 'redux'

import error from '../Containers/ErrorNotification/reducer'
import lobby from '../Containers/Lobby/reducer'
import lobbyList from '../Containers/LobbyList/reducer'
import session from '../Containers/Session/reducer'
import game from '../Containers/Game/reducer'


const rootReducer = combineReducers({
  game,
  error,
  lobby,
  session,
  lobbyList,
})

export default rootReducer