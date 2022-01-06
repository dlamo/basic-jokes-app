import express from 'express'

import { db } from '../../config/db.js'

import jokes from '../../data/jokes.js'
import { SELECT_RANDOM_JOKE } from './queries.js'

export const router = express.Router()

router.get('/', (req, res) => {
  db.query(SELECT_RANDOM_JOKE, (err, result) => {
    if (err) throw err
    console.log('RESULT', result)
  })
  
  const randomIndex = Math.floor(Math.random() * jokes.length)
  const joke = jokes[randomIndex]
  
  res.render('pages/index', { joke })
})
