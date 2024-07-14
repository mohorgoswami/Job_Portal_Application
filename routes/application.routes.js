/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const { createApplicationController, getAllApplicationController, getApplicationByIdController, updateApplicationByIdController, deleteApplicationIdController } = require('../controller/application.controller')
const router = express.Router()

// const { validateRequestBody } = require('../middleware/validateMiddleware')
// const { createApplicationSchema, updateApplicationSchema } = require('../validators/application.validator')

router.post('/', createApplicationController)
router.get('/all', getAllApplicationController)
router.get('/:id', getApplicationByIdController)
router.patch('/:id', updateApplicationByIdController)
router.delete('/:id', deleteApplicationIdController)

module.exports = router
