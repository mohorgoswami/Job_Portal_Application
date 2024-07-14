/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
const {Application}=require("../models/application.model")

const createApplications=async(data)=>{
  return await Application.create(data)
}
const findApplicationByEmail = async(emailId) => {
  return await Application.findOne({ where: { emailId } })
}
const findApplicationById=async(id)=>{
  return await Application.findByPk(id)
}
const findAllApplication = async() => {
  return await Application.findAll()
}

const updateApplication = async(id, data) => {
  return await Application.update(data, { where: { id } })
}

const deleteApplication = async(Application) => {
  return await Application.destroy()
}

module.exports={createApplications, findApplicationById, findApplicationByEmail, findAllApplication, updateApplication, deleteApplication }
