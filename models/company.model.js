/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const Company = sequelize.define('Company', {
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
    type: DataTypes.TEXT,
    allowNull: true
  },
  website: {
    type: DataTypes.STRING
  },
  specialties: {
    type: DataTypes.STRING
  },
  size: {
    type: DataTypes.STRING
  },
  followers: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: []
  },
}, {
})

module.exports = { Company }
