const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("🚀 Server up and running on PORT 5000");

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
});

app.get("/greet", (req, res) => {
  res.send("<h1>I am RUTH ABOSEDE</h1>");
});
