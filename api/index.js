const express = require('express')
require('dotenv').config()

const {initialSetup} = require('./config/db.js')

const { router: jokesRouter } =require("./sql/jokes/routes.js")

const app = express()

// DB Initial Setup
initialSetup()

app.use(express.static('public'))

app.set('view engine', 'ejs')

// Routers
app.use("/*", jokesRouter)

app.listen(process.env.PORT || 5000, () => console.log("Server listening..."))