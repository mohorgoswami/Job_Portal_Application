const { User } = require('../../models/index')

const createUser = async(data) => {
  const user = await User.create(data)

  return user
}

const verifyEmail = async(email) => {
  const emails = await User.findOne({
    where: {
      email
    }
  })
  return emails
}

const userById = async(id) => {
  const userId = await User.findByPk(id)
  return userId
}

module.exports = {
  createUser,
  verifyEmail,
  userById
}
