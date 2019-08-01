import { ActionType, getType } from 'typesafe-actions'

import * as lobbyListActions from './actions'
import { ILobby } from '../Lobby/types'

export type LobbyListActions = ActionType<typeof lobbyListActions>

const defaultState: ILobby[] = []

export default (state = defaultState, action: LobbyListActions): typeof defaultState => {
  switch (action.type) {
    case getType(lobbyListActions.setLobbyListAction):
      return action.payload
    default:
      return state
  }
}