const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'https://ai-code-review-orpin.vercel.app',
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// 🔑 Make sure preflight OPTIONS requests are handled
app.options('*', cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;
