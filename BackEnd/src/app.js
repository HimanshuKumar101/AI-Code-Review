const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();

// Allow specific Vercel frontend origin
const allowedOrigins = ['https://ai-code-review-orpin.vercel.app'];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");  // If you're sending cookies or credentials.
  next();
});

// Allow CORS middleware
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true, // Allow credentials if needed
}));

// Preflight handler for CORS
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
