const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const JobType = sequelize.define('JobType', {
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
  description: {
    type: DataTypes.STRING
  }
}, {
})

module.exports = { JobType }
