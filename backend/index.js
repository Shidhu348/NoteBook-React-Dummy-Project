const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

// This is required to get response from the server and shoe req.body()
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
    console.log(`iNoteBook backend listening on port ${port}`)
})