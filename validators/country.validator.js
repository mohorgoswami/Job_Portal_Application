/* eslint-disable linebreak-style */
// src/validators/companyValidator.js

const Joi = require('joi')

const createCountrySchema = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional()
})

const updateCountrySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional()
})

module.exports = { createCountrySchema, updateCountrySchema }
