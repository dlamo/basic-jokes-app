import express from "express"

import {initialSetup} from './config/db.js'

import { router as jokesRouter } from "./sql/jokes/routes.js"

const app = express()

initialSetup()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.use("/*", jokesRouter)

app.listen(process.env.PORT || 5000, () => console.log("Server listening..."))