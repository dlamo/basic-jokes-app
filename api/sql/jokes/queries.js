export const CREATE_DB_JOKES = 'CREATE DATABASE IF NOT EXISTS jokes'

export const USE_DB_JOKES = 'USE jokes'

export const CREATE_TABLE_JOKES = `CREATE TEMPORARY TABLE jokes (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  setup VARCHAR(120) NOT NULL, 
  punchline VARCHAR(120) NOT NULL
)`

export const INSERT_MANY_JOKES = `INSERT INTO jokes (setup, punchline) VALUES ?`

export const SELECT_RANDOM_JOKE = ` SELECT * FROM jokes
  ORDER BY RAND()
  LIMIT 1;
`
