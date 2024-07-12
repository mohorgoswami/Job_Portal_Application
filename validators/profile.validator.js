/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
// src/validators/profileValidator.js

const Joi = require('joi')

const createProfileSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  profilePicture: Joi.string().optional().uri(),
  bio: Joi.string().optional(),
  dateOfBirth: Joi.date().optional(),
  nationality: Joi.string().optional(),
  linkedInProfile: Joi.string().optional().uri(),
  personalWebsite: Joi.string().optional().uri(),
  education: Joi.array().items(Joi.object({
    institution: Joi.string().required(),
    degree: Joi.string().required(),
    fieldOfStudy: Joi.string().optional(),
    startDate: Joi.date().optional(),
    endDate: Joi.date().optional(),
  })).optional(),
  experience: Joi.array().items(Joi.object({
    company: Joi.string().required(),
    position: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().optional(),
    description: Joi.string().optional(),
  })).optional(),
  skills: Joi.array().items(Joi.string()).optional(),
  contactInfo: Joi.object({
    email: Joi.string().email().required(),
    phone: Joi.string().optional(),
    address: Joi.string().optional(),
  }).optional(),
  certifications: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    institution: Joi.string().required(),
    date: Joi.date().required(),
  })).optional(),
  languages: Joi.array().items(Joi.string()).optional(),
  projects: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional(),
    link: Joi.string().optional().uri(),
  })).optional(),
  references: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    contact: Joi.string().required(),
  })).optional(),
})

const updateProfileSchema = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  profilePicture: Joi.string().optional().uri(),
  bio: Joi.string().optional(),
  dateOfBirth: Joi.date().optional(),
  nationality: Joi.string().optional(),
  linkedInProfile: Joi.string().optional().uri(),
  personalWebsite: Joi.string().optional().uri(),
  education: Joi.array().items(Joi.object({
    institution: Joi.string().required(),
    degree: Joi.string().required(),
    fieldOfStudy: Joi.string().optional(),
    startDate: Joi.date().optional(),
    endDate: Joi.date().optional(),
  })).optional(),
  experience: Joi.array().items(Joi.object({
    company: Joi.string().required(),
    position: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().optional(),
    description: Joi.string().optional(),
  })).optional(),
  skills: Joi.array().items(Joi.string()).optional(),
  contactInfo: Joi.object({
    email: Joi.string().email().optional(),
    phone: Joi.string().optional(),
    address: Joi.string().optional(),
  }).optional(),
  certifications: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    institution: Joi.string().required(),
    date: Joi.date().required(),
  })).optional(),
  languages: Joi.array().items(Joi.string()).optional(),
  projects: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional(),
    link: Joi.string().optional().uri(),
  })).optional(),
  references: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    contact: Joi.string().required(),
  })).optional(),
})

module.exports = { createProfileSchema, updateProfileSchema }
