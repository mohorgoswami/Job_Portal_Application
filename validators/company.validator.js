/* eslint-disable linebreak-style */
/* eslint-disable key-spacing */
/* eslint-disable linebreak-style */
// src/validators/companyValidator.js

const Joi = require('joi')

const createCompanySchema = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional(),
  website: Joi.string().uri().optional(),
  specialties:Joi.string().required(),
  size:Joi.string().required(),
  industryId:Joi.number().required(),
  countryId:Joi.number().required()
})

const updateCompanySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional(),
  website: Joi.string().uri().optional(),
  specialties:Joi.string().required(),
  size:Joi.string().required(),
  industryId:Joi.string().required(),
  countryId:Joi.string().required()
})

module.exports = { createCompanySchema, updateCompanySchema }
