const express = require("express");
const app = express();
const port = 3000;
const {getDateTime , getNum} = require("./dateTime");

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("The date and time are currently: " + getDateTime());
  res.write("The Num: " + getNum());
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
