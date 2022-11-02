const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.json([{
    id: "1",
    title: "Atomic Habits"
  }, {
    id: "2",
    title: "Pride and Prejudice"
  }, {
    id: "3",
    title: "Walden"
  }]);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});