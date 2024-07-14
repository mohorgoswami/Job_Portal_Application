/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const { findAllApplication, findApplicationById, updateApplication, deleteApplication, findApplicationByEmail, createApplications } = require('../context/Application.context')
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers')

const createApplicationController = async(req, res) => {
  try {
    const existingApplication = await findApplicationByEmail(req.body.emailId)
    if (existingApplication) {
      return handleCustomErrorResponse(res, `This ${existingApplication.emailId} Application emailId is already exists, please try with another one`, 400)
    }
    const newApplication = await createApplications({
      ...req.body
    })

    handleSuccessResponse(res, 'Application Created Successfully', newApplication, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getAllApplicationController = async(req, res) => {
  try {
    const Application = await findAllApplication()

    handleSuccessResponse(res, 'All Application fetched Successfully', Application, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')

  }
}

const getApplicationByIdController = async(req, res) => {
  try {
    const Application = await findApplicationById(req.params.id)
    handleSuccessResponse(res, 'Application with id is  fetched Successfully', Application, 200)

  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const updateApplicationByIdController = async(req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const [updatedRows] = await updateApplication(id, data)

    if (updatedRows === 0) {
      return handleErrorResponse(new Error('Application not found'), req, res, 'Application not found', 404)
    }

    handleSuccessResponse(res, `Application with id ${id} updated successfully`, { id, ...data }, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const deleteApplicationIdController = async(req, res) => {
  try {
    const job = await findApplicationById(req.params.id)
    if (!job) {
      return handleCustomErrorResponse(res, 'Application not found', 404)
    }

    await deleteApplication(job)
    handleSuccessResponse(res, 'Job deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
module.exports = { createApplicationController, getAllApplicationController, getApplicationByIdController, updateApplicationByIdController, deleteApplicationIdController}
