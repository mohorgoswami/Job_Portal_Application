/* eslint-disable linebreak-style */
/* eslint-disable key-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable comma-spacing */
/* eslint-disable linebreak-style */
const { User } = require('../models/userModel')
const { Job } = require('../models/jobModel')
const { Application } = require('../models/application.model')
const { Profile } = require('../models/profile.model')
const { JobType } = require('../models/jobType.model')
const { Company } = require('../models/company.model')
const { Industry } = require('../models/industry.model')
const { Country } = require('../models/country.model')

User.hasOne(Profile, {
  foreignKey: 'userId'
})
Profile.belongsTo(User, {
  foreignKey: 'userId'
})

Job.belongsTo(JobType, {
  foreignKey: 'jobTypeId'
})
JobType.hasMany(Job, {
  foreignKey: 'jobTypeId'
})

Job.belongsTo(Company, {
  foreignKey: 'companyId'
})
Company.hasMany(Job, {
  foreignKey: 'companyId'
})

Job.belongsTo(Industry, {
  foreignKey: 'industryId'
})
Industry.hasMany(Job, {
  foreignKey: 'industryId'
})

Job.belongsTo(Country, {
  foreignKey: 'countryId'
})
Country.hasMany(Job, {
  foreignKey: 'countryId'
})

Company.belongsTo(Industry,{
  foreignKey: 'industryId'
})
Industry.hasMany(Company,{
  foreignKey: 'industryId'

})
Company.belongsTo(Country,{
  foreignKey:'countryId'
})
Country.hasMany(Company,{
  foreignKey:'countryId'
})
module.exports = {
  User,
  Job,
  Application,
  Profile,
  JobType,
  Company,
  Industry,
  Country
}
