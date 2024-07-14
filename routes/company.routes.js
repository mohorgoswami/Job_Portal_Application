/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const {
  createCompanyController,
  getAllCompanyController,
  getCompanyByIdController,
  updateCompanyByIdController,
  deleteCompanyIdController,
  addFollower,
  removeFollower
} = require('../controller/company.controller')
const router = express.Router()

router.post('/', createCompanyController)
router.get('/all', getAllCompanyController)
router.get('/:id', getCompanyByIdController)
router.patch('/:id', updateCompanyByIdController)
router.delete('/:id', deleteCompanyIdController)
router.post('/:companyId/followers', addFollower)
router.delete('/:companyId/unfollowers', removeFollower)

module.exports = router
