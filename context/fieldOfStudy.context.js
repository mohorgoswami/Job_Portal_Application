/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const { FieldOfStudy } = require('../models/fieldOfStudy.model')

const createfieldOfStudy = async(data) => {
  return await FieldOfStudy.create(data)
}
const findfieldOfStudyById = async(id) => {
  return await FieldOfStudy.findByPk(id)
}
const findfieldOfStudyByCode = async(code) => {
  return await FieldOfStudy.findOne({ where: { code } })
}
const findAllfieldOfStudy = async() => {
  return await FieldOfStudy.findAll()
}
const updatefieldOfStudy = async(id, data) => {
  return await FieldOfStudy.update(data, { where: { id } })
}

const deletefieldOfStudy = async(FieldOfStudy) => {
  return await FieldOfStudy.destroy()
}

module.exports = { createfieldOfStudy, findfieldOfStudyById, findfieldOfStudyByCode, findAllfieldOfStudy, updatefieldOfStudy, deletefieldOfStudy }
