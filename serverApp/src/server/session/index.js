const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)

const { URL } = require('../../db/config')


const store = new MongoStore({
  collection: 'sessions',
  uri: URL + '/shop',
})

module.exports = session({
  secret: 'something',
  resave: false,
  saveUninitialized: false,
  store,
})