const express = require("express");
const app = express();
app.use(express.json());

// Users Array
var users = [
  {"id":"1","name":"test","email":"test@gmail.com"}
];

// Read
app.get("/users", (req, res) => {
  return res.status(200).send(res.json(users));
});

// Read Id Based
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  if (!user) {
    return res.status(404).json({error:"User not found"});
  }
  return  res.status(200).json(user);
});

// Delete User
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  if (!user) {
    return res.send();
  }
  users.filter((user) => user.id != id);
  return res.status(204).json(user);
});

// Create
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const user = { id: users.length + 1, name, email };
  users.push(user);
  return res.status(201).json(user);
});

// Update
app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  if (!user) {
    return res.status(404).send();
  }
  const {name,email} = req.body;
  if(name){
    user.name = name;
  }
  if(email){
    user.email = email;
  }
  const index = users.findIndex((user) => user.id == id); 
  users[index] = user;
  return res.json(user);
});

// Port
app.listen(3000, () => {
  console.log("Server is running http://localhost:3000/users/");
});
