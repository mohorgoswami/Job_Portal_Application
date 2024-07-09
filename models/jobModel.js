/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const Job = sequelize.define('Jobs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  code: {
    type: DataTypes.STRING
  },

  name: {
    type: DataTypes.STRING
  },

  title: {
    type: DataTypes.STRING
  },

  description: {
    type: DataTypes.STRING
  },

  location: {
    type: DataTypes.STRING
  },

  salaryRange: {
    type: DataTypes.STRING
  },

  workLevel: {
    type: DataTypes.ENUM('entry_level', 'mid_level', 'senior_level', 'manager', 'director')
  },

  experience: {
    type: DataTypes.STRING
  },

  responsibilities: {
    type: DataTypes.TEXT
  },

  requirements: {
    type: DataTypes.TEXT
  },

  benefits: {
    type: DataTypes.TEXT
  },

  applicationDeadline: {
    type: DataTypes.DATE
  },

  remoteOption: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = { Job }
