const express = require("express");
require("dotenv").config();
const { chats } = require("./data/data");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params.id);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
