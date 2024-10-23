const express = require('express')
const clientRoutes = require('./routes/client.routes')
const ticketRoutes = require('./routes/ticket.routes')
const database = require('./services/database')

const app = express()

app.use(express.json())
app.use('/api', clientRoutes)
app.use('/api', ticketRoutes)

app.listen(3001, () => console.log('Server started on port 3001'));