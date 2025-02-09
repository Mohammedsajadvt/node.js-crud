const jwt = require("jsonwebtoken");

const users = [
  { id: 1, name: "alex", email: "alex@gmail.com", password: 1234 },
  { id: 2, name: "john", email: "john@gmail.com", password: 123456 },
];

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Not Token found" });
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, "topsecret");
    const user = users.find((user) => user.id === payload.id);
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authentication;

