/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const { createjobTypeController, getAlljobTypeController, getjobTypeByIdController, updatejobTypeByIdController, deletejobTypeIdController } = require('../controller/jobType.controller')
const router = express.Router()

const { validateRequestBody } = require('../middleware/validateMiddleware')
const { createjobTypeSchema, updatejobTypeSchema } = require('../validators/jobType.validator')

router.post('/', validateRequestBody(createjobTypeSchema), createjobTypeController)
router.get('/all', getAlljobTypeController)
router.get('/:id', getjobTypeByIdController)
router.patch('/:id', validateRequestBody(updatejobTypeSchema), updatejobTypeByIdController)
router.delete('/:id', deletejobTypeIdController)

module.exports = router
