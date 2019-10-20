const router = require('express').Router()
const { validationResult } = require('express-validator')

const Account = require('../../models/account')

const {
  registerValidator,
  loginValidator,
} = require('./validator')

router.post('/login', loginValidator, async (req, res) => {
  const { email } = req.body
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  req.session.isAuth = true
  req.session.account = await Account.findOne({ email })
  req.session.save(() => {
    res.send()
  })
})

router.get('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.send()
  })
})

router.post('/register', registerValidator, async (req, res) => {
  const {
    name,
    email,
    password,
  } = req.body
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  const account = new Account({
    name,
    email,
    password,
  })
  await account.save()
  res.send()
})

module.exports = router