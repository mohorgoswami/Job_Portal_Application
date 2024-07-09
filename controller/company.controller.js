/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const { findCompanyByCode, createCompany, findAllCompany, findCompanyById, updateCompany, deleteCompany } = require('../context/company.context')
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers')

const createCompanyController = async(req, res) => {
  try {
    const existingCompany = await findCompanyByCode(req.body.code)
    if (existingCompany) {
      return handleCustomErrorResponse(res, `This ${existingCompany.code} Company code is already exists, please try with another one`, 400)
    }
    const newCompany = await createCompany({
      ...req.body
    })

    handleSuccessResponse(res, 'Company Created Successfully', newCompany, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getAllCompanyController = async(req, res) => {
  try {
    const company = await findAllCompany()

    handleSuccessResponse(res, 'All Company fetched Successfully', company, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')

  }
}

const getCompanyByIdController = async(req, res) => {
  try {
    const {id} = req.params
    const company = await findCompanyById(id)
    handleSuccessResponse(res, 'Company with id is  fetched Successfully', company, 200)

  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const updateCompanyByIdController = async(req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const [updatedRows] = await updateCompany(id, data)

    if (updatedRows === 0) {
      return handleErrorResponse(new Error('Company not found'), req, res, 'Company not found', 404)
    }

    handleSuccessResponse(res, `Company with id ${id} updated successfully`, { id, ...data }, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const deleteCompanyIdController = async(req, res) => {
  try {
    const job = await findCompanyById(req.params.id)
    if (!job) {
      return handleCustomErrorResponse(res, 'Company not found', 404)
    }

    await deleteCompany(job)
    handleSuccessResponse(res, 'Job deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
module.exports = { createCompanyController, getAllCompanyController, getCompanyByIdController, updateCompanyByIdController, deleteCompanyIdController}
