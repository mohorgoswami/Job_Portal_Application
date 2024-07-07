const Joi = require('joi');

const createUserSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
});

const updateUserSchema = Joi.object({
    name: Joi.string().optional(),
    role: Joi.string().optional()
});

module.exports = { createUserSchema ,updateUserSchema}