const express = require("express");
const app = express();
const courses = require("./course.json");
const port = 5000;

app.get("/", (req, res) => {
  res.send("my server running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("course id: ", id);

  const course = courses.find((cr) => cr.id === id || {});
  res.send(course);
});
app.listen(port, () => {
  console.log(`my server is running on: ${port}`);
});
