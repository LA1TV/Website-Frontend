const config = require('../config.json')

const setEnvironmentVariables = ({ env }) => {
  const keys = Object.keys(env)

  keys.forEach(key => {
    process.env[key] = env[key]
  })
}

setEnvironmentVariables(config)
