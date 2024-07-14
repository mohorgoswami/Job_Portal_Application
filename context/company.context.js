/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
const { Company } = require("../models/company.model")

const createCompany = async(data) => {
  return await Company.create(data)
}
const findCompanyByCode = async(code) => {
  return await Company.findOne({ where: { code } })
}
const findCompanyById = async(id) => {
  return await Company.findByPk(id)
}
const findAllCompany = async() => {
  return await Company.findAll()
}

const updateCompany = async(id, data) => {
  return await Company.update(data, { where: { id } })
}

const deleteCompany = async(company) => {
  return await Company.destroy()
}
module.exports = { createCompany, findCompanyByCode, findCompanyById, findAllCompany, updateCompany, deleteCompany }
