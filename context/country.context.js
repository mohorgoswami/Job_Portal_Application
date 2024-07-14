/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const { Country } = require('../models/country.model')

const createCountry = async(data) => {
  return await Country.create(data)
}
const findCountryById = async(id) => {
  return await Country.findByPk(id)
}
const findCountryByCode = async(code) => {
  return await Country.findOne({ where: { code } })
}
const findAllCountry = async() => {
  return await Country.findAll()
}
const updateCountry = async(id, data) => {
  return await Country.update(data, { where: { id } })
}

const deleteCountry = async(Country) => {
  return await Country.destroy()
}

module.exports = { createCountry, findCountryById, findCountryByCode, findAllCountry, updateCountry, deleteCountry }
