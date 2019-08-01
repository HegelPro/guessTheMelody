import { ActionType, getType } from 'typesafe-actions'


import * as errorActions from './actions'

export type ErrorActions = ActionType<typeof errorActions>

const defaultState = { type: '', message: '' }

export default (state = defaultState, action: ErrorActions): typeof defaultState => {
  switch (action.type) {
    case getType(errorActions.setErrorAction):
      return {
        ...state,
        message: action.payload.message,
      }
    default:
      return state
  }
}