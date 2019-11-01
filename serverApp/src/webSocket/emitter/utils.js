module.exports.createAction = (actionType, payload) => ({
  type: actionType + '/success',
  payload,
})