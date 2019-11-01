const express = require('express')
const path = require('path')

const sessionMiddleware = require('./sessionMiddleware')
const corsMiddleware = require('./corsMiddleware')

module.exports = [
  express.static(path.join(__dirname, '..', '..', 'public')),
  express.json(),
  corsMiddleware,
  sessionMiddleware,
]