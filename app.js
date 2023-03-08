const express = require('express')
const app = express()
const router = require('./routes/routes.js')
const connectDB = require('./config/mongoDB.js')()

app.use(express.json())
app.use('/api', router)

app.listen(3000, () => {
  console.log('Server listening on port 3000!')
})
