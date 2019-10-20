const { body } = require('express-validator')

const Account = require('../../models/account')


module.exports.loginValidator = [
  body('email')
    .isEmail()
    .custom(async value => {
        const account = await Account.findOne({ email: value })
        if (!account) {
            return Promise.reject('Account didn\'t find')
        }
        return true
    })
    .normalizeEmail(),
  body('password')
    .custom(async value => {
        const account = await Account.findOne({ email: value })
        if (
            account
            && value !== account.password
        ) {
            return Promise.reject('Account or password is wrong')
        }
        return true
    })
    .trim(),
]

module.exports.registerValidator = [
    body('email')
        .isEmail()
        .custom(async value => {
            const account = await Account.findOne({ email: value })
            if (account) {
                return Promise.reject('E-mail already in use');
            }
            return true
        })
        .normalizeEmail(),
    body('password')
        .isLength({ min: 6 })
        .isAlphanumeric()
        .trim(),
    body('confirm')
        .custom((value, { req }) => value === req.body.password)
]