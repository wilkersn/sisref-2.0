const sequelize = require('sequelize');
const database = require('../db');
const ModelUser = require('../models/user');
const shema = '';

class Ponto extends sequelize.Model { }


Ponto.init(
  {
    id:
    {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    data_entrada:
    {
      type: sequelize.DATE,
      allowNull: true,
    },
    entrada:
    {
      type: sequelize.TIME,
      allowNull: true,
    },
    inicio_intervalo:
    {
      type: sequelize.TIME,
      allowNull: true,
    },
    fim_intervalo:
    {
      type: sequelize.TIME,
      allowNull: true,
    },
    saida:
    {
      type: sequelize.TIME,
      allowNull: true,
    },
    horas_trabalhadas:
    {
      type: sequelize.TIME,
      allowNull: true,
    },
    homologado:
    {
      type: sequelize.BOOLEAN,
      defaultValue: false
    },
    idUser:
    {
      type: sequelize.INTEGER
    }

  },
  {
    sequelize: database, modelName: 'Ponto', shema, tableName: 'Ponto', timestamps: false,
  },


)

module.exports = Ponto;