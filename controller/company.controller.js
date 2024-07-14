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
    const { id } = req.params
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
    handleSuccessResponse(res, 'Company deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const addFollower = async(req, res) => {
  try {
    const { companyId } = req.params
    const { follower } = req.body

    let company = await findCompanyById(companyId)

    if (!company) {
      return res.status(404).json({ message: 'Company not found' })
    }

    const followerset = new Set(company.followers || [])
    followerset.add(follower)

    company.followers = Array.from(followerset)
    company = await company.save()

    res.status(200).json({ message: 'Follower added successfully', followers: company.followers })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message })
  }
}

const removeFollower = async(req, res) => {
  try {
    const { companyId } = req.params
    const { follower } = req.body

    let company = await findCompanyById(companyId)

    if (!company) {
      return res.status(404).json({ message: 'Company not found' })
    }

    if (!company.followers) {
      company.followers = []
    }

    const followerSet = new Set(company.followers || [])

    followerSet.delete(follower)

    company.followers = Array.from(followerSet)
    company = await company.save()

    res.status(200).json({ message: 'Follower removed successfully', followers: company.followers })
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message })
  }
}

module.exports = {
  createCompanyController,
  getAllCompanyController,
  getCompanyByIdController,
  updateCompanyByIdController,
  deleteCompanyIdController,
  addFollower,
  removeFollower
}
