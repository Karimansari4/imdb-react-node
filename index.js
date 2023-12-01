const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const cors = require('cors')
const sequelize = require('./config/db')
const movieRouter = require('./routes/movieRoute')

sequelize.sync({alter: true})

app.use(cors())
app.use(express.json())


// app.get('/', (req, res) => res.send('Hello World!'))

app.use('/movie', movieRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))