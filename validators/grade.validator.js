/* eslint-disable linebreak-style */
// src/validators/companyValidator.js

const Joi = require('joi')

const createGradeSchema = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional()
})

const updateGradeSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional()
})

module.exports = { createGradeSchema, updateGradeSchema }
