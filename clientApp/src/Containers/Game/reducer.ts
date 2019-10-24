import { getType } from 'typesafe-actions'

import { IGame } from './types'
import rootActions from '../../store/actions'
import { RootActions } from '../../store/types'


const defaultState: IGame = { word: [] }

export default (state = defaultState, action: RootActions): IGame => {
  switch (action.type) {
    case getType(rootActions.game.setGameAction):
      return action.payload
    default:
      return state
  }
}