const combinePolicyDirectives = ({ name, value }) => {
  if (!value) return `${name};`
  const combinedValues = value.join(' ')
  return `${name} ${combinedValues};`
}

const policyConfigParser = (config) => {
  const combinedPolicyDirectives = config.map(combinePolicyDirectives)
  return combinedPolicyDirectives.join([' '])
}

module.exports = policyConfigParser
