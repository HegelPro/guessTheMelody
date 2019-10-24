const songRouter = require('./song')
const authRouter = require('./auth')

module.exports.connectRoutes = app => {
  app.use('/songs', songRouter)
  app.use('/auth', authRouter)
}