const express = require('express')
const http = require('http')

const middlewares = require('./middlewares')

const { connectRoutes } = require('./routers')
const { connectWebSocket } = require('../webSocket')

const app = express()
const server = http.Server(app)

// Start middlewares
middlewares.forEach(middleware => app.use(middleware))

// Start route middlewares
connectRoutes(app)

// Connect webSocket
connectWebSocket(server)

module.exports = new Promise(res => {
    server.listen(5000, res)
})
    .then(() => console.log('Server is connected.'))
    .catch(() => console.log('Server is NOT connected. It was error.'))