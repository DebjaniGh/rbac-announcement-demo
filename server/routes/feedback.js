const express = require("express");
const router = express.Router();

// Feedback endpoint
router.post("/feedback", (req, res) => {
  const feedback = req.body;
  console.log("Received feedback:", feedback);
  res.json({ ok: true, ...feedback });
});

module.exports = router;
