export const CREATE_DB_JOKES = 'CREATE DATABASE jokes'

export const CREATE_TABLE_JOKES = `CREATE TABLE jokes (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  setup VARCHAR(255), 
  punchline VARCHAR(255)
)`

export const INSERT_MANY_JOKES = `INSERT INTO jokes (setup, punchline) VALUES ?`
