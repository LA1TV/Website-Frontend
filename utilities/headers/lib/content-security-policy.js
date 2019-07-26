const policyConfigParser = require('./helper/config-parser')
const contentSecurityPolicyConfig = require('./config/content-security-policy-config')

const contentSecurityPolicy = ['Content-Security-Policy', policyConfigParser(contentSecurityPolicyConfig())]

module.exports = contentSecurityPolicy
