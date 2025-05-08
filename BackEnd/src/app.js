
const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors(
    {
        origin: 'https://ai-code-review-orpin.vercel.app',
        methods: ['GET', 'POST'],
        credentials: true,
        optionsSuccessStatus: 200 // For legacy browser support
    }

))


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app
