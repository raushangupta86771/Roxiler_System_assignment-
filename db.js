const mongoose = require('mongoose');

// remote
// const mongoUrl = "mongodb+srv://raushan4442:passraus4344@cluster0.zawznjn.mongodb.net/detailmanager?authSource=admin&replicaSet=atlas-13j4vm-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

//local
const mongoUrl = "mongodb://localhost:27017/detailmatcher?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
    mongoose.connect(mongoUrl, () => {
        console.log("Connected to Mongo successfully......");
    })
}

module.exports = connectToMongo;
