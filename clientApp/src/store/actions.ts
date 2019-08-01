import * as loginActions from '../Containers/Login/actions'
import * as registrationActions from '../Containers/Registration/actions'
import * as errorActions from '../Containers/ErrorNotification/actions'
import * as lobbyActions from '../Containers/Lobby/actions'
import * as lobbyListActions from '../Containers/LobbyList/actions'

export default {
  login: loginActions,
  registration: registrationActions,
  error: errorActions,
  lobby: lobbyActions,
  lobbyList: lobbyListActions,
}