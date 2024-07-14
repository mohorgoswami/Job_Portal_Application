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
    const company = await findCompanyById(id, {
      attributes: ['id', 'name', 'industry', 'description', 'website', 'size', 'countryId', 'specialties']
    })
    const response = {
      id: company.id,
      name: company.name,
      Headquater: company.industryId,
      description: company.description,
      website: company.website,
      size: company.size,
      countryId: company.countryId,
      specialty: company.specialties
    }

    handleSuccessResponse(res, 'Company with id is  fetched Successfully', response, 200)

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
    const Company = await findCompanyById(req.params.id)
    if (!Company) {
      return handleCustomErrorResponse(res, 'Company not found', 404)
    }

    await deleteCompany(Company)
    handleSuccessResponse(res, 'Company deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
module.exports = { createCompanyController, getAllCompanyController, getCompanyByIdController, updateCompanyByIdController, deleteCompanyIdController}
