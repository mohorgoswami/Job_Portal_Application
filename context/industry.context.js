/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const { Industry } = require('../models/industry.model')

const createIndustry = async(data) => {
  return await Industry.create(data)
}
const findIndustryById = async(id) => {
  return await Industry.findByPk(id)
}
const findIndustryByCode = async(code) => {
  return await Industry.findOne({ where: { code } })
}
const findAllIndustry = async() => {
  return await Industry.findAll()
}
const updateIndustry = async(id, data) => {
  return await Industry.update(data, { where: { id } })
}
  
const deleteIndustry = async(Industry) => {
  return await Industry.destroy()
}

module.exports = { createIndustry, findIndustryById, findIndustryByCode, findAllIndustry, updateIndustry, deleteIndustry }
