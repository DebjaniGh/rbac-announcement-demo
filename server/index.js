const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const healthRoutes = require("./routes/health");
const feedbackRoutes = require("./routes/feedback");
const authRoutes = require("./routes/auth");
app.use("/api", healthRoutes); // GET /api/health
app.use("/api", feedbackRoutes); // POST /api/feedback
app.use("/api/auth", authRoutes); // POST /api/auth/login

app.get("/", (req, res) => {
  res
    .status(200)
    .type("text")
    .send(
      "Server is running. Try GET /api/health, POST /api/feedback, or POST /api/auth/login",
    );
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
