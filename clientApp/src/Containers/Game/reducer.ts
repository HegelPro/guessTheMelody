import { ActionType, getType } from 'typesafe-actions'

import * as gameActions from './actions'
import { IGame } from './types'


export type GameActions = ActionType<typeof gameActions>

const defaultState: IGame = { word: [] }

export default (state = defaultState, action: GameActions): IGame => {
  switch (action.type) {
    case getType(gameActions.setWord):
      return {
        word: action.payload
      }
    default:
      return state
  }
}