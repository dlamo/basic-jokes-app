import mysql from 'mysql'

import jokes from '../data/jokes.js'
import { CREATE_DB_JOKES, CREATE_TABLE_JOKES } from '../sql/jokes/queries.js'

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306
})

export const initialSetup = () => {
  db.connect((err) => {
    if (err) throw err
    console.log('Database is connected successfully !')

    // INITIAL DB SETUP
    const values = jokes.map(joke => [joke.setup, joke.punchline])
    db.query(CREATE_DB_JOKES, (err, result) => {
      if (err) throw err
      console.log('Database created!')

      db.query(CREATE_TABLE_JOKES, (err, result) => {
        if (err) throw err
        console.log('Table created!')
      })
    })  
  })
}
