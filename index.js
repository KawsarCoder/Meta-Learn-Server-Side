const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("my server running");
});

app.listen(port, () => {
  console.log(`my server is running on: ${port}`);
});
