import express from 'express'

// import db from '../../config/db.js'

import jokes from '../../data/jokes.js'

export const router = express.Router()

router.get('/', (req, res) => {
  // db.query('SELECT * FROM jokes', (err, data) => {
  //   if (err) throw err
  //   console.log(data)
  // })

  const randomIndex = Math.floor(Math.random() * jokes.length)
  const joke = jokes[randomIndex]
  
  res.render('pages/index', { joke })
})
