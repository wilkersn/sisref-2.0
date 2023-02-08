const sequelize = require('sequelize');
const Ponto = require('./ponto');
const database = require('../db');
const shema = '';

class User extends sequelize.Model { }


User.init(
  {
    matricula:
    {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    senha:
    {
      type: sequelize.STRING,
      allowNull: false,
    },
    nome:
    {
      type: sequelize.STRING,
      allowNull: false,
    },
    cargo:
    {
      type: sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },

  },
  {
    sequelize: database, modelName: 'User', shema, tableName: 'User'
  },

)

Ponto.belongsTo(User)

module.exports = User;