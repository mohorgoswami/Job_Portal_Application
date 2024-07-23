/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const { createGradeController, getAllGradeController, getGradeByIdController, updateGradeByIdController, deleteGradeIdController } = require('../controller/grade.controller')
const router = express.Router()

const { validateRequestBody } = require('../middleware/validateMiddleware')
const { createGradeSchema, updateGradeSchema } = require('../validators/grade.validator')

router.post('/', validateRequestBody(createGradeSchema), createGradeController)
router.get('/all', getAllGradeController)
router.get('/:id', getGradeByIdController)
router.patch('/:id', validateRequestBody(updateGradeSchema), updateGradeByIdController)
router.delete('/:id', deleteGradeIdController)

module.exports = router
