# Basic Joke App

## Description
Basic App to show random jokes. Technologies used: Node.js, Express.js and MySQL.

## Installation guide
- You need mysql installed in your machine. In the next [a link](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) you will find installation guide for different OS. Make sure you have a local user with credentials, [a here](https://linuxize.com/post/how-to-create-mysql-user-accounts-and-grant-privileges/) you have a guide to do it.
- Clone this repository in your local machine.
- Install dependencies with `npm install`.
- Create .env file in root folder with the information needed (change any field with your user data, PORT field is optional):
```
PORT = 5000
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = password
DB_PORT = 3306
```
- Launch the application with `npm run dev`.