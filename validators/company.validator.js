/* eslint-disable linebreak-style */
// src/validators/companyValidator.js

const Joi = require('joi')

const createCompanySchema = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional(),
  website: Joi.string().uri().optional()
})

const updateCompanySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  website: Joi.string().uri().optional()
})

module.exports = { createCompanySchema, updateCompanySchema }
