const express = require("express");
const router = express.Router();
const users = require("../models/users");

// POST /api/auth/login
// Accepts { username, password } in the request body.
// Returns the user object (minus the password) if credentials match.
// Returns 401 if credentials are invalid.
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // --- Validation ---
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  // --- "Authentication" ---
  // Find a user whose username AND password both match.
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password." });
  }

  // --- Response ---
  // Return the user WITHOUT the password field.
  // The spread operator copies all properties, then we overwrite password to undefined
  // and use destructuring to strip it out.
  const { password: _, ...userWithoutPassword } = user;

  res.json({
    message: "Login successful",
    user: userWithoutPassword,
  });
});

module.exports = router;
