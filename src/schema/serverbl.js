const { Schema, model } = require('mongoose');

let serverbl = new Schema({
    Server : String,
    Reason: String,
})

module.exports = model('server-blacklist', serverbl);