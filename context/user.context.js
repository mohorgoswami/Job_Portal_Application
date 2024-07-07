const { User } = require('../../models/index')

const createUser = async(data) => {
  const user = await User.create(data)

  return user
}

const findJobById = async(id) => {
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
  findJobById
}
