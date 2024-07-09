/* eslint-disable linebreak-style */
const express = require('express')
const indexRoutes = require('./routes/index')
const { sequelize } = require('./config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8501

app.use(express.json())

app.use('/api/v1', indexRoutes)

module.exports = { app, PORT, sequelize }
