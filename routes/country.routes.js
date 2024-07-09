/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const { createCountryController, getAllCountryController, getCountryByIdController, updateCountryByIdController, deleteCountryIdController } = require('../controller/country.controller')
const router = express.Router()

const { validateRequestBody } = require('../middleware/validateMiddleware')
const { createCountrySchema, updateCountrySchema } = require('../validators/country.validator')

router.post('/', validateRequestBody(createCountrySchema), createCountryController)
router.get('/all', getAllCountryController)
router.get('/:id', getCountryByIdController)
router.patch('/:id', validateRequestBody(updateCountrySchema), updateCountryByIdController)
router.delete('/:id', deleteCountryIdController)

module.exports = router
