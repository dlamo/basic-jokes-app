import express from "express"
import dotenv from 'dotenv'
import fetch from "node-fetch"

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

dotenv.config()
const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get("/*", (req, res) => {
  // let jokes = []
  // fetch(process.env.API_URL)
  //   .then(response => response.text())
  //   .then(data => console.log(data))

  const randomIndex = Math.floor(Math.random() * jokes.length)
  const joke = jokes[randomIndex]
  
  res.render('pages/index', { joke })
})

app.listen(process.env.PORT || 5000, () => console.log("Server listening..."))