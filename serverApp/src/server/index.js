const express = require('express')
const http = require('http')


const middlewares = require('./middlewares')

const { connectRoutes } = require('./routers')
const { connectWebSocket } = require('../webSocket')

const app = express()
const server = http.Server(app)

// Place for start middlewares
middlewares.forEach(middleware => app.use(middleware))

// Place for start route middlewares
connectRoutes(app)

//
connectWebSocket(server)

module.exports = new Promise(res => {
    server.listen(5000, res)
})
    .then(() => console.log('Server is connected.'))
    .catch(() => console.log('Server is NOT connected. It was error.'))