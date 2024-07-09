/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const { createApplicationController } = require('../controller/application.controller')
const router = express.Router()

router.post('/', createApplicationController)

module.exports = router
