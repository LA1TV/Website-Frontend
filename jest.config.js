const ignorePaths = [
  'babel.config.js',
  'jest.config.js',
  'coverage',
  'node_modules',
  '.next'
]

const coverageIgnorePaths = [
  'utilities/global-css/index.js'
]

module.exports = {
  collectCoverageFrom: ['<rootDir>/**/*{.js,x}'],
  coveragePathIgnorePatterns: [...ignorePaths, ...coverageIgnorePaths],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  clearMocks: true,
  setupFiles: ['<rootDir>/tooling/jest/setup-enzyme.js'],
  setupFilesAfterEnv: ['<rootDir>/tooling/jest/setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/?(*.)test.js?(x)'],
  testPathIgnorePatterns: [...ignorePaths],
  watchPathIgnorePatterns: [...ignorePaths]
}
