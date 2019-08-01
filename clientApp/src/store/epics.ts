import { combineEpics } from 'redux-observable'
import * as loginEpic from '../Containers/Login/epics'
import * as lobbyEpic from '../Containers/Lobby/epics'
import * as registrationEpic from '../Containers/Registration/epics'
import * as lobbyListEpic from '../Containers/LobbyList/epics'

export default combineEpics(
  ...Object.values(lobbyEpic),
  ...Object.values(lobbyListEpic),
  ...Object.values(loginEpic),
  ...Object.values(registrationEpic),
)