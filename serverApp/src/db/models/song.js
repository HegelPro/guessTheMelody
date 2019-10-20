const { Schema, model } = require('mongoose')

const song = new Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    }
})

module.exports = model('Song', song)