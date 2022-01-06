import mysql from 'mysql'

import jokes from '../data/jokes.js'
import { CREATE_DB_JOKES, CREATE_TABLE_JOKES, INSERT_MANY_JOKES, USE_DB_JOKES } from '../sql/jokes/queries.js'

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306
})

export const initialSetup = () => {
  db.connect((err) => {
    if (err) throw err
    console.log('Database is connected successfully!')

    // INITIAL DB SETUP
    db.query(CREATE_DB_JOKES, (err) => {
      if (err) throw err
      console.log('Database created!')

      db.query(USE_DB_JOKES, (err) => {
        if (err) throw err
        console.log('Using jokes database...')

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
