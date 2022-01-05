import express from "express"
import dotenv from 'dotenv'

import sqldb from "./src/config/db.js"
import jokes from './jokes.js'

dotenv.config()
const app = express()

sqldb.connect(err => {
  if (err) console.error('Error connecting to the DB')
  console.log('Connected to the DB')
})

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get("/*", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length)
  const joke = jokes[randomIndex]
  
  res.render('pages/index', { joke })
})

app.listen(process.env.PORT || 5000, () => console.log("Server listening..."))