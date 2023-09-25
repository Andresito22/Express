const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");


const users = [
  {
    username: "usuario1",
    password: "contraseña1",
  },
  {
    username: "usuario2",
    password: "contraseña2",
  },
];


const secretKey = process.env.SECRET_KEY; 

router.post("/login", (req, res) => {
  const { username, password } = req.body;


  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  const token = jwt.sign({ username: user.username }, secretKey);

  res.json({ token });
});

module.exports = router;
