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
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: true
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: true
  },
  linkedInProfile: {
    type: DataTypes.STRING,
    allowNull: true
  },
  personalWebsite: {
    type: DataTypes.STRING,
    allowNull: true
  },
  education: {
    type: DataTypes.JSON,
    allowNull: true
  },
  experience: {
    type: DataTypes.JSON,
    allowNull: true
  },
  skills: {
    type: DataTypes.JSON,
    allowNull: true
  },
  contactInfo: {
    type: DataTypes.JSON,
    allowNull: true
  },
  certifications: {
    type: DataTypes.JSON,
    allowNull: true
  },
  languages: {
    type: DataTypes.STRING
  },
  projects: {
    type: DataTypes.JSON,
    allowNull: true
  },
  references: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
})

module.exports = { Profile }
