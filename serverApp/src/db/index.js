const mongoose = require('mongoose')
const config = require('./config')

require('./server') // подключение сервера 5000 порт

console.log(config.getUrl)

mongoose.connect(`${config.getUrl}/songs`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log('Database is connected.'))
    .catch(() => console.log('Database isn\'t connected. It was error.'))
