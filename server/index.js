const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const healthRoutes = require("./health");
const feedbackRoutes = require("./feedback");
app.use("/api", healthRoutes); // GET /api/health
app.use("/api", feedbackRoutes); // POST /api/feedback

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
