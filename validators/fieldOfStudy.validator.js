/* eslint-disable linebreak-style */
// src/validators/companyValidator.js

const Joi = require('joi')

const createfieldOfStudySchema = Joi.object({
  code: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().optional()
})

const updatefieldOfStudySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().optional()
})

module.exports = { createfieldOfStudySchema, updatefieldOfStudySchema }
