const mongoose = require('mongoose')

const connectDB = async ()=> {
    try{
        await
        mongoose.connect(process.env.mongoUrl)
        console.log('Connect to MongoDB')
    }catch(err) {
        console.error(err)
        process.exit(1)
    }
}
module.exports = connectDB;