const express = require('express')

const { db } = require('../../config/db.js')

const { SELECT_RANDOM_JOKE } = require('./queries.js')

const router = express.Router()

router.get('/', (req, res) => {
  db.query(SELECT_RANDOM_JOKE, (err, result) => {
    if (err) throw err
    
    const joke = result[0]
    res.render('pages/index', { joke })
  })
  
})

module.exports = {router}
