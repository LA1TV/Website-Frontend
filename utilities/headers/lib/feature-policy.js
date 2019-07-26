const policyConfigParser = require('./helper/config-parser')
const featurePolicyConfig = require('./config/feature-policy-config')

const featurePolicy = ['Feature-Policy', policyConfigParser(featurePolicyConfig)]

module.exports = featurePolicy
