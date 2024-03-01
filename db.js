// const { MongoClient } = require('mongodb')

// let dbconnection 

// module.exports = {
//     connectTodb: (cb) => {
//         MongoClient.connect('mongodb://localhost:27017/bookstore')
//         .then((client) => {
//             dbconnection = client.db()
//             return cb()
//         })
//         .catch(err => {
//             console.log(err)
//             return cb(err)
//         })
//     },
//     getDb: () => dbConnection
// }

const mongoose = require('mongoose')

// const URL = 'mongodb+srv://ukejemicheal:HFshR6WpLVRrtSls@cluster0.csedbmx.mongodb.net'
const URL = 'mongodb://localhost:27017/parent_connect'
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