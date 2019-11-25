const express = require('express')
const path = require('path')

const sessionMiddleware = require('./sessionMiddleware')
const corsMiddleware = require('./corsMiddleware')

module.exports = [
  corsMiddleware,
  express.static(path.join(__dirname, '..', '..', 'public')),
  express.json(),
  sessionMiddleware,
]