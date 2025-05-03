const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();

// Allow specific Vercel frontend origin
const allowedOrigins = ['https://ai-code-review-orpin.vercel.app'];

// CORS configuration with the 'cors' package
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,  // Allow credentials if needed (cookies, etc.)
}));

// Preflight handler for CORS (handled by the 'cors' package)
app.options('*', (req, res) => {
  res.status(200).end();
});

// Body parser middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Main route for AI
app.use("/ai", aiRoutes);

module.exports = app;
