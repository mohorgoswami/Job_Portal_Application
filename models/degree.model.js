/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const Degree = sequelize.define('Degree', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
})

module.exports = { Degree }
