const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// ✅ Explicit CORS options
const corsOptions = {
  origin: 'https://ai-code-review-orpin.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'], // include OPTIONS
  allowedHeaders: ['Content-Type'], // optional, more strict
  credentials: true,
  optionsSuccessStatus: 204, // or 200
};

// ✅ Apply CORS globally
app.use(cors(corsOptions));

// ✅ Handle OPTIONS preflight requests before routes
app.options('*', cors(corsOptions));

// JSON parser
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;
