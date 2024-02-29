const express = require("express");
const { connecToDb, getDb, connectTodb } = require("./db");

//Init app & middleware
const app = express();

//db connection
let db;

connectTodb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("app listening on port 3000");
    });
    db = getDb();
  }
});

//routes
app.get("/books", (req, res) => {
  res.json({ msg: "welcome to the api" });
});
