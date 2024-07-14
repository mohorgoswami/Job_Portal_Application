/* eslint-disable linebreak-style */
const { User } = require('../models/userModel')

const createUser = async(data) => {
  const user = await User.create(data)

  return user
}

const findUserById = async(id) => {
  return await User.findByPk(id)
}

const verifyEmail = async(email) => {
  const emails = await User.findOne({
    where: {
      email
    }
  })
  return emails
}

module.exports = {
  createUser,
  verifyEmail,
  findUserById
}
