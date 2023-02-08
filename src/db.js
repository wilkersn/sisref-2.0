const sequelize = require('sequelize')

const database = new sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
})



module.exports = database;