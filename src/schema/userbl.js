const { Schema, model } = require('mongoose');

var conn = require("../structures/Client.js");
let userbl = new Schema({
    User : String,
    Reason: String,
})

module.exports = model('user-blacklist', userbl);