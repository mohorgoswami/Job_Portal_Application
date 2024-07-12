/* eslint-disable linebreak-style */
const express = require('express')
const indexRoutes = require('./routes/index')
const { sequelize } = require('./config/db')
const authRoutes = require('./routes/auth.routes')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8501

app.use(express.json())

app.use('/api/v1', indexRoutes)
app.use('/api/auth', authRoutes)

module.exports = { app, PORT, sequelize }
