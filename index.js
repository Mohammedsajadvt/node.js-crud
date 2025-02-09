const express = require("express");
const morgan = require("morgan");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

app.use(morgan("combined"));

app.use(require("./middlewares/logger.middleware"));

app.get("/", (req, res) => {
  return res.send("Hello World!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  const token = jwt.sign({ id: user.id }, "topsecret");
  return res.json({ message: "Login Success", token });
});

app.get(
  "/profile",
  require("./middlewares/authentication.middleware"),
  (req, res) => {
    return res.json({name:req.user.name,email:req.user.email});
  }
);

app.use("/users", require("./routers/users.users"));

app.listen(3000, () => {
  console.log(`Server is running http://localhost:3000/`);
});
