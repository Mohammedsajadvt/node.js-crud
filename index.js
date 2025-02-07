const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.use("/users", require("./routers/users.users"));

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000/users/");
});
