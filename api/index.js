import express from "express"
import dotenv from 'dotenv'

import sqldb from "./config/db.js"
import { router as jokesRouter } from "./sql/jokes/routes.js"

dotenv.config()
const app = express()

sqldb.connect(err => {
  if (err) console.error('Error connecting to the DB')
  console.log('Connected to the DB')
})

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use("/*", jokesRouter)

app.listen(process.env.PORT || 5000, () => console.log("Server listening..."))