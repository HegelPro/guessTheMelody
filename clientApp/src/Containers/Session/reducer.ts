import { ActionType, getType } from 'typesafe-actions'

import * as loginActions from '../Login/actions'
import * as sessionActions from './actions'

import { ISession } from './types'

export type LobbyActions = ActionType<typeof loginActions>
export type SessionActions = ActionType<typeof sessionActions>

const defaultState: ISession = {
  isAuth: false,
}

export default (state = defaultState, action: LobbyActions | SessionActions): typeof defaultState => {
  switch (action.type) {
    case getType(sessionActions.getSessionFromCookiesAction.success):
      return {
        isAuth: true,
        account: action.payload,
      }
    case getType(loginActions.loginAction.success):
      return {
        isAuth: true,
        account: action.payload,
      }
    case getType(loginActions.logoutAction):
      return {
        isAuth: false,
      }
    default:
      return state
  }
}