const express = require("express");
const app = express();
app.use("/", function (req, res) {
  console.log("NEW REQUEST");
  res.json({ name: "Ali" });
});

app.listen(3001, () => {});
