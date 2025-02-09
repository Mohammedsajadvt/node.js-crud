const express = require("express");
const morgan = require("morgan");
const app = express();


app.use(express.json());

app.use(morgan("combined"));

app.use(require('./middlewares/logger.middleware'));

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.use("/users", require("./routers/users.users"));


app.listen(3000, () => {
  console.log(`Server is running http://localhost:3000/`);
});
