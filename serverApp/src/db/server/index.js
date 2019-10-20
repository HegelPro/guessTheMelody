const express = require('express')
const path = require('path')
const session = require('express-session')

const cors = require('cors')

const url = require('../config').getUrl
const MongoStore = require('connect-mongodb-session')(session)

const app = express()

const songRouter = require('../routers/song')
const authRouter = require('../routers/auth')

app.use(express.static(path.join(__dirname, '..', '..', 'public')))

app.use(cors({credentials: true, origin: 'http://localhost:3000'})) // TODO пока не изучу HTTP запросы

const store = new MongoStore({
    collection: 'sessions',
    uri: url + '/shop',
})

app.use(express.json())

app.use(session({
    secret: 'something',
    resave: false,
    saveUninitialized: false,
    store,
}))

app.use('/songs', songRouter)
app.use('/auth', authRouter)

app.listen(5000)