const mongoose = require('mongoose')
const { URL } = require('./config')

module.exports = mongoose.connect(`${URL}/songs`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log('Database is connected.'))
    .catch(() => console.log('Database is NOT connected. It was error.'))

