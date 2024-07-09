/* eslint-disable linebreak-style */
/* eslint-disable arrow-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
const {Application}=require("../models/application.model")

const createApplications=async(data)=>{
  return await Application.create(data)
}
const findApplicationByCode = async(code) => {
  return await Application.findOne({ where: { code } })
}
const findApplicationById=async(id)=>{
  return await Application.findByPk(id)
}

module.exports={createApplications, findApplicationById, findApplicationByCode}
