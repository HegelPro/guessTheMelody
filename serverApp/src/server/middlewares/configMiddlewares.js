const express = require('express')
const path = require('path')

const cors = require('cors')

const session = require('../session')


module.exports = [
  express.static(path.join(__dirname, '..', 'public')),
  cors({credentials: true, origin: 'http://localhost:3000'}), // TODO пока не изучу HTTP запросы
  express.json(),
  session,
]