/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const { createApplications, findApplicationByCode } = require('../context/application.context');
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers');

const BASE_URL = 'http://localhost:8500';
const createApplicationController = async(req, res) => {
  try {
    const existingApplication = await findApplicationByCode(req.body.code);
    if (existingApplication) {
      return handleCustomErrorResponse(res, `This ${existingApplication.code} Application code is already exists, please try with another one`, 400)
    }
    const newApplication = await createApplications({
      ...req.body,
      resume: req.body.resume.startsWith('http') ? req.body.resume : `${BASE_URL}/${req.body.resume}`
    })

    handleSuccessResponse(res, 'Application Created Successfully', newApplication, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
const getApplicationAll = async(req, res) => {

}
module.exports = { createApplicationController, getApplicationAll };
