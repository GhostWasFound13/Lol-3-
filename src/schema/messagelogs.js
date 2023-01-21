const { Schema, model }= require("mongoose");

let msglogs = new Schema({
  Guild: String, 
  Channel: String
}) 

module.exports = model("Messagelogs", msglogs);

