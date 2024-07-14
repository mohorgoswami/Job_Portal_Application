/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const Joi = require('joi')

const createApplicationSchema = Joi.object({
  code: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  coverLetter: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  emailId: Joi.string().required(),
  shortBio: Joi.string().required(),
  status: Joi.string().valid('submitted', 'reviewing', 'interview', 'offered', 'rejected'),
  resume: Joi.string().required(),
  agreeWithTerms: Joi.boolean().optional()
})
const updateApplicationSchema = Joi.object({
  code: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  coverLetter: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  emailId: Joi.string().required(),
  shortBio: Joi.string().required(),
  status: Joi.string().valid('submitted', 'reviewing', 'interview', 'offered', 'rejected'),
  resume: Joi.string().required(),
  agreeWithTerms: Joi.boolean().optional()
})
