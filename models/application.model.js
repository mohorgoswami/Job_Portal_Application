const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Application = sequelize.define('Application', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    coverLetter: {
        type: DataTypes.STRING,
        allowNull: true
    },
    shortBio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    emailId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    shortBio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('submitted', 'reviewing', 'interview', 'offered', 'rejected'),
        defaultValue: 'submitted'
    },
    resume: {
        type: DataTypes.STRING,
        allowNull: false
    },
    agreeWithTerms: {
        type: DataTypes.BOOLEAN,
    },
    createdBy: {
        type: DataTypes.INTEGER,
    },
    updatedBy: {
        type: DataTypes.INTEGER,
    },
}, {
});


module.exports = { Application };
