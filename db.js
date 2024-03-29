const mongoose = require('mongoose')

const URL = ''
// const URL = 'mongodb://localhost:27017/parent_connect'
const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect(URL)
        console.log(`MongoDB connected: ${connect.connection.host}`)
    }
    catch(error){
        console.log(`error: ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB