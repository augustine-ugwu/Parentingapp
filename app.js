const express = require("express");
const connectDB = require("./db");
const Post = require("./models/postModel");
const User = require("./models/userModel");
const bcrypt = require("bcryptjs");

//Init app & middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect db
connectDB;

//routes
app.get("/M00877074", (req, res) => {
  res.json({ msg: "welcome to the api" });
});

app.post("/M00877074/register", async (req, res) => {
  const { username, profile, password, profile_info } = req.body;

  // encrypt password
  const salt = bcrypt.genSalt(10);
  const hashed_password = bcrypt.hash(password, salt);
  const post = await User.create({
    username,
    email,
    profile,
    password: hashed_password,
  });

  if (post) {
    res.json(post);
  }
});

app.listen(4000, () => {
  console.log("App is listening on port 4000");
});
