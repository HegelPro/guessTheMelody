import { getType } from 'typesafe-actions'
import { AsyncActionCreator } from 'typesafe-actions/dist/create-async-action'


export const getActionTypes = (actions: any) => {
  const actionTypes: string[] = []
  solveActions(
    actions,
    (action: any) => actionTypes.push(getType(action)),
    (action: any) => {
      actionTypes.push(getType(action.request))
      actionTypes.push(getType(action.success))
      actionTypes.push(getType(action.failure))
    }
  )
  return actionTypes
}

export const solveActions = (actionsModule: any, cbSync: any, cbAsync: any) => {
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

export const getSubStringBeforeSlash = (str: string): string => {
  const reg = /^\w*\//g;
  const subStrings = str.match(reg)
  return subStrings
    ? subStrings[0]
    : ''
}

export const checkAsyncAction = (asyncAction: AsyncActionCreator<any, any, any, any>): boolean => {
  const subString = getSubStringBeforeSlash(getType(asyncAction.request))
  return getType(asyncAction.request) === `${subString}req`
    && getType(asyncAction.success) === `${subString}suc`
    && getType(asyncAction.failure) === `${subString}fail`
}