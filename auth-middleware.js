const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

function authenticateToken(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Acceso no autorizado. Se requiere un token." });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido o expirado." });
    }

    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken,
};
