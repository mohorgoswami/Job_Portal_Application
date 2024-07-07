const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Job = sequelize.define('Jobs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  jobCode:{
    type:DataTypes.STRING,
    allowNull:false

  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
},
description: {
    type: DataTypes.TEXT,
    allowNull: false
},
company: {
    type: DataTypes.STRING,
    allowNull: false
},
location: {
    type: DataTypes.STRING,
    allowNull: false
},
salaryRange: {
    type: DataTypes.STRING,
    allowNull: true // Allow null if salary range is optional
},
experienceTime:{
    type:DataTypes.INTEGER,
},
employmentType: {
    type: DataTypes.ENUM('full_time', 'part_time', 'contract', 'temporary', 'internship'),
    allowNull: false
},
experienceLevel: {
    type: DataTypes.ENUM('entry_level', 'mid_level', 'senior_level', 'manager', 'director'),
    allowNull: false
},
responsibilities: {
    type: DataTypes.TEXT,
    allowNull: true // Detailed job responsibilities
},
requirements: {
    type: DataTypes.TEXT,
    allowNull: true // Job requirements
},
benefits: {
    type: DataTypes.TEXT,
    allowNull: true // Job benefits
},
applicationDeadline: {
    type: DataTypes.DATE,
    allowNull: true // Application deadline for the job
},
industry: {
    type: DataTypes.STRING,
    allowNull: true // Industry of the job
},
jobFunction: {
    type: DataTypes.STRING,
    allowNull: true // Job function or role
},
remoteOption: {
    type: DataTypes.BOOLEAN,
    defaultValue: false // Whether the job can be done remotely
},
})
module.exports = { Job };
