/* eslint-disable linebreak-style */
const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  linkedInProfile: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contactInfo: {
    type: DataTypes.JSON,
    allowNull: true
  },
  resume: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
})

module.exports = { Profile }
