import { ActionType, getType } from 'typesafe-actions'

import * as lobbyActions from './actions'
import { ILobby } from './types'

export type LobbyActions = ActionType<typeof lobbyActions>

const defaultState: ILobby = {
  name: 'new',
  id: 'new',
  maxPlayers: 0,
  minPlayers: 0,
  withPassword: false,
  players: []
}

export default (state = defaultState, action: LobbyActions): typeof defaultState => {
  switch (action.type) {
    case getType(lobbyActions.setLobbyAction):
      return action.payload
    default:
      return state
  }
}