
const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require('cors');

const app = express();


app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.options('*', cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
});


app.use("/ai", aiRoutes);

module.exports = app;
