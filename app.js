const express = require("express");
const connectDB = require('./db')
const Post = require('./models/postModel')
const User = require('./models/userModel')
const bcrypt = require('bcryptjs')


//Init app & middleware
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// connect db
connectDB()

//routes
app.get("/books", (req, res) => {
  res.json({ msg: "welcome to the api" });
});




app.listen(4000, ()=>{
  console.log("App is listening on port 4000")
})