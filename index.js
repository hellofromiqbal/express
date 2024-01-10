const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: 'This json message is generated from "/" API route.' });
});

app.get("/hello", (req, res) => {
  res.json({ message: 'This json message is generated from "/hello" API route.' });
});

app.get("/world", (req, res) => {
  res.json({ message: 'This json message is generated from "/world" API route.' });
});

app.get("/:slug", (req, res) => {
  const { slug } = this.request.params;
  res.json({ message: `This json message is generated from "/${slug}" API route.` });
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;