const { Schema, model } = require('mongoose')

const accountSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

accountSchema.methods.toClient = function() {
    let account = this.toObject()
    delete account.password
    return account
}

module.exports = model('Account', accountSchema)