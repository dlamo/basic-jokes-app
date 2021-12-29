const express = require("express")
const path = require("path")
const ejs = require('ejs')

const jokes = [
  {
    "id": 1,
    "type": "general",
    "setup": "What did the fish say when it hit the wall?",
    "punchline": "Dam."
  },
  {
    "id": 2,
    "type": "general",
    "setup": "How do you make a tissue dance?",
    "punchline": "You put a little boogie on it."
  },
  {
    "id": 3,
    "type": "general",
    "setup": "What's Forrest Gump's password?",
    "punchline": "1Forrest1"
  },
  {
    "id": 4,
    "type": "general",
    "setup": "What do you call a belt made out of watches?",
    "punchline": "A waist of time."
  }
]

const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get("/*", (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length)
  const joke = jokes[randomIndex]
  res.render('pages/index', { joke })
})

app.listen(process.env.PORT || 5000, () => console.log("Server listening..."))