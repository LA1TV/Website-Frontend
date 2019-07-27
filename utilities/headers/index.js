const strictTransportSecurity = require('./lib/strict-transport-security')
const contentTypeOptions = require('./lib/content-type-options')
const referrerPolicy = require('./lib/referrer-policy')
const featurePolicy = require('./lib/feature-policy')
const contentSecurityPolicy = require('./lib/content-security-policy')
const xssProtectionPolicy = require('./lib/xss-protection')

const setHeaders = (res) => {
  res.setHeader(...strictTransportSecurity)
  res.setHeader(...contentTypeOptions)
  res.setHeader(...referrerPolicy)
  res.setHeader(...featurePolicy)
  res.setHeader(...contentSecurityPolicy())
  res.setHeader(...xssProtectionPolicy)
}

module.exports = setHeaders
