/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const { createIndustryController, getAllIndustryController, getIndustryByIdController, updateIndustryByIdController, deleteIndustryIdController } = require('../controller/industry.controller')
const router = express.Router()

const { validateRequestBody } = require('../middleware/validateMiddleware')
const { createIndustrySchema, updateIndustrySchema } = require('../validators/industry.validator')

router.post('/', validateRequestBody(createIndustrySchema), createIndustryController)
router.get('/all', getAllIndustryController)
router.get('/:id', getIndustryByIdController)
router.patch('/:id', validateRequestBody(updateIndustrySchema), updateIndustryByIdController)
router.delete('/:id', deleteIndustryIdController)

module.exports = router
