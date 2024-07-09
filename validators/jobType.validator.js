/* eslint-disable linebreak-style */
// src/validators/companyValidator.js

const Joi = require('joi')

const createjobTypeSchema = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional()
})

const updatejobTypeSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional()
})

module.exports = { createjobTypeSchema, updatejobTypeSchema }
