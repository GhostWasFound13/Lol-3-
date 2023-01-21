require("dotenv").config();

module.exports = {
    token: "OTMzMDE1Mzk5OTc5NzAwMjM0.GEWAXJ.oiOIgMehXAdY3MHX80SVXmjhEr9NZP_FX-qgcY", 
    clientID: "933015399979700234",
    prefix: "?", 
    mongourl: "mongodb+srv://saksham:saksham@cluster0.i3obgea.mongodb.net/?retryWrites=true&w=majority", 
    emColour: "embed color hex"
}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}