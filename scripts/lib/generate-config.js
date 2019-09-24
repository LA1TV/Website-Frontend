const fs = require('fs')
const path = require('path')

const configFile = JSON.stringify({
  env: {
    LA1TV_API_KEY: process.env.LA1TV_API_KEY || 'Insert key Here!'
  }
}, null, 2)

const generateConfigFromEnvironmentVariables = () => {
  const configPath = path.resolve(__dirname, '..', '..', 'config.json')

  try {
    if (!fs.existsSync(configPath)) {
      fs.writeFileSync(configPath, configFile);
    }
  } catch(err) {
    console.error(err)
  }
}

module.exports = generateConfigFromEnvironmentVariables