const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();

// ✅ Step 1: Allow your Vercel frontend explicitly
const allowedOrigins = ['https://ai-code-review-orpin.vercel.app'];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ✅ Step 2: Also use cors middleware as backup
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

// ✅ Preflight handler
app.options('*', (req, res) => {
  res.sendStatus(200);
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// ✅ Main route
app.use("/ai", aiRoutes);

module.exports = app;
