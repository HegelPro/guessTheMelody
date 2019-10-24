import * as loginActions from '../Containers/Login/actions'
import * as registrationActions from '../Containers/Registration/actions'
import * as errorActions from '../Containers/ErrorNotification/actions'
import * as lobbyActions from '../Containers/Lobby/actions'
import * as lobbyListActions from '../Containers/LobbyList/actions'
import * as sessionActions from '../Containers/Session/actions'
import * as gameActions from '../Containers/Game/actions'


export default {
  login: loginActions,
  game: gameActions,
  registration: registrationActions,
  error: errorActions,
  lobby: lobbyActions,
  session: sessionActions,
  lobbyList: lobbyListActions,
}