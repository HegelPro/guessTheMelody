const Account = require('../../db/models/account')

module.exports = async (res, req, next) => {
  if (res.session.account) {
    res.session.account = await Account.findById(res.session.account._id)
  }
  next()
}