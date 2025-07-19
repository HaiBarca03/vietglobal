const express = require('express')
const cors = require('cors')
const indexRouter = require('./src/routers/index.router')
const dbConnect = require('./src/config/db.config')

// app
const app = express()
app.use(express.json())
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
  })
)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// env
const API_PREFIX = process.env.API_PREFIX || '/api'
const PORT = process.env.PORT || 3000

// endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})
app.use(API_PREFIX, indexRouter)

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message })
})

// db connect
dbConnect()

// start server
app.listen(PORT, () => {
  console.log(
    `Applications running on the gateway http://localhost:${PORT}${API_PREFIX}`
  )
})

module.exports = app
