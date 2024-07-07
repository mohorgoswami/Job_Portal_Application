const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: DataTypes.STRING
    // allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING
    // allowNull: false,
  },
  email: {
    type: DataTypes.STRING
    // allowNull: false,

  },
  password: {
    type: DataTypes.STRING
    // allowNull: false
  },
  role: {
    type: DataTypes.STRING
  }
})

module.exports = { User }
