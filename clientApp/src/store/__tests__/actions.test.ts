import actions from '../actions'

import {
  solveActions,
  checkAsyncAction,
  getActionTypes,
} from '../__utils__/actions'


describe('Store Actions', () => {
  it('Check async actions type', () => {
    solveActions(
      actions,
      () => {},
      (action: any) => expect(checkAsyncAction(action)).toEqual(true)
    )
  })

  it('Haven\'t the same type name', () => {
    const actionTypes = getActionTypes(actions)

    while (actionTypes.length > 0) {
      let lastAction = actionTypes.pop()
      expect(actionTypes.findIndex(actionType => actionType === lastAction)).toEqual(-1)
    }
  })
})