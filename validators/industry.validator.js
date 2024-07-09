/* eslint-disable linebreak-style */
// src/validators/companyValidator.js

const Joi = require('joi')

const createIndustrySchema = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional()
})

const updateIndustrySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional()
})

module.exports = { createIndustrySchema, updateIndustrySchema }
