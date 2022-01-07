const mysql = require('mysql')

const jokes = require('../data/jokes.js')
const { CREATE_DB_JOKES, CREATE_TABLE_JOKES, INSERT_MANY_JOKES, USE_DB_JOKES } = require('../sql/jokes/queries.js')

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

const initialSetup = () => {
  db.connect((err) => {
    if (err) throw err
    console.log('Database is connected successfully!')

    // INITIAL DB SETUP
    db.query(CREATE_DB_JOKES, (err) => {
      if (err) throw err

      db.query(USE_DB_JOKES, (err) => {
        if (err) throw err

        db.query(CREATE_TABLE_JOKES, (err) => {
          if (err) throw err
          console.log('Jokes table created!')
            
          const values = jokes.map(joke => [joke.setup, joke.punchline])
          
          db.query(INSERT_MANY_JOKES, [values], (err, results) => {
            if (err) throw err
            console.log(`Inserted ${results.affectedRows} rows into jokes table.`)
          })
        })
      })
    })  
  })
}

module.exports = {db, initialSetup}
