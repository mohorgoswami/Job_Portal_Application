/* eslint-disable max-len */
const { createUser, verifyEmail, userById } = require('../db/context/user.context')
const { handleSuccessResponse, handleErrorResponse, handleCustomErrorResponse } = require('../utils/handlers/errorResponseHandlers')

const createUsers = async (req, res) => {
  try {
    const isEmail = await verifyEmail(req.body.email)
    if (isEmail) {
      return handleCustomErrorResponse(res, 'Given email is already available, please try another one.', 409)
    }
    const users = await createUser({ ...req.body })
    return handleSuccessResponse(res, 'User created successfully', users, 201)
  } catch (error) {
    return handleErrorResponse(error, req, res, 'Failed to create user')
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params
  try {
    const user = await userById(id)
    if (!user) {
      res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error occurred' })
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params
  const { name, role } = req.body
  try {
    const user = await userById(id)
    if (!user) {
      res.status(404).json({ message: 'User not found' })
    }
    if (name) { user.name = name }
    user.role = role
    await user.save()

    res.status(200).json({ message: 'User updated successfully', user })
  } catch (error) {
    console.log(error)
  }
};

module.exports = { getUserById, updateUserById, createUsers }
