import express from 'express'

import jokes from '../../data/jokes.js'

export const router = express.Router()

router.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length)
  const joke = jokes[randomIndex]
  
  res.render('pages/index', { joke })
})
