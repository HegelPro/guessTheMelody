import { combineEpics } from 'redux-observable'

import * as gameEpics from '../Containers/Game/epics'
import * as loginEpics from '../Containers/Login/epics'
import * as lobbyEpics from '../Containers/Lobby/epics'
import * as registrationEpics from '../Containers/Registration/epics'
import * as lobbyListEpics from '../Containers/LobbyList/epics'
import * as sessionEpics from '../Containers/Session/epics'


export default combineEpics(
  ...Object.values(gameEpics),
  ...Object.values(lobbyEpics),
  ...Object.values(lobbyListEpics),
  ...Object.values(loginEpics),
  ...Object.values(registrationEpics),
  ...Object.values(sessionEpics),
)