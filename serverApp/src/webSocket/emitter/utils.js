module.exports.createAction = (actionType, payload) => ({
  type: actionType + '/suc',
  payload,
})

module.exports.createSuccessAction = (actionType, payload) => ({
  type: actionType + '/suc',
  payload,
})

module.exports.createErrorAction = (actionType, payload) => ({
  type: actionType + '/fail',
  payload,
})