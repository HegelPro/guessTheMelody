module.exports.createAction = (actionType, payload) => ({
  type: actionType + '/success',
  payload,
})

module.exports.createSuccessAction = (actionType, payload) => ({
  type: actionType + '/success',
  payload,
})

module.exports.createErrorAction = (actionType, payload) => ({
  type: actionType + '/failure',
  payload,
})