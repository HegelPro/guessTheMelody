const cors = require('cors')


const whitelist = ['http://localhost:3000', 'http://localhost:3001']

const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { credentials: true, origin: true }
  } else {
    corsOptions = { origin: false }

    callback(null, corsOptions)
  }
}

// module.exports = cors(corsOptionsDelegate) // only whiteList
module.exports = cors({
  credentials: true,
  origin: true,
})