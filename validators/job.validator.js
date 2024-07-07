const Joi = require('joi');

const createJobSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  company: Joi.string().required(),
  location: Joi.string().required(),
  salaryRange: Joi.string().optional(),
  employmentType: Joi.string().valid('full_time', 'part_time', 'contract', 'temporary', 'internship').required(),
  experienceLevel: Joi.string().valid('entry_level', 'mid_level', 'senior_level', 'manager', 'director').required(),
  responsibilities: Joi.string().optional(),
  requirements: Joi.string().optional(),
  benefits: Joi.string().optional(),
  applicationDeadline: Joi.date().optional(),
  industry: Joi.string().optional(),
  jobFunction: Joi.string().optional(),
  remoteOption: Joi.boolean().optional()
});