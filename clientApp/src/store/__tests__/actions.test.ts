import { getType } from 'typesafe-actions'
import { AsyncActionCreator } from 'typesafe-actions/dist/create-async-action'

import actionsModule from '../actions'


const getActionTypes = () => {
  const actionTypes: string[] = []
  solveActions(
    (action: any) => actionTypes.push(getType(action)),
    (action: any) => {
      actionTypes.push(getType(action.request))
      actionTypes.push(getType(action.success))
      actionTypes.push(getType(action.failure))
    }
  )
  return actionTypes
}

const solveActions = (cbSync: any, cbAsync: any) => {
  for (const actionsModuleKey in actionsModule) {
    if (actionsModule.hasOwnProperty(actionsModuleKey)) {
      const actions = (actionsModule as any)[actionsModuleKey]

      for (const actionKey in actions) {
        if (actions.hasOwnProperty(actionKey)) {
          const action = (actions as any)[actionKey]

          // async action
          if (typeof action !== "function") {
            cbAsync(action)
          }
          // sync action
          else {
            cbSync(action)
          }
        }
      }

    }
  }
}

const getSubStringBeforeSlash = (str: string): string => {
  const reg = /^\w*\//g;
  const subStrings = str.match(reg)
  return subStrings
    ? subStrings[0]
    : ''
}

const checkAsyncAction = (asyncAction: AsyncActionCreator<any, any, any, any>): boolean => {
  const subString = getSubStringBeforeSlash(getType(asyncAction.request))
  return getType(asyncAction.request) === `${subString}request`
    && getType(asyncAction.success) === `${subString}success`
    && getType(asyncAction.failure) === `${subString}failure`
}

describe('Store Actions', () => {
  it('Check async actions type', () => {
    solveActions(() => {}, (action: any) => {
      expect(checkAsyncAction(action)).toEqual(true)
    })
  })

  it('Haven\'t the same type name', () => {
    const actionTypes = getActionTypes()

    while (actionTypes.length > 0) {
      let lastAction = actionTypes.pop()
      expect(actionTypes.findIndex(actionType => actionType === lastAction)).toEqual(-1)
    }
  })
})