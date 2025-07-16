const db = require("../db");
const bcrypt = require("bcrypt");

const registerController = async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, mobile, hashedPassword], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    return res.json({ message: "✅ Registration successful" });
  });
};

module.exports = registerController;
