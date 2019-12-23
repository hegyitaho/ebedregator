// eslint-disable-next-line @typescript-eslint/no-var-requires
const {jsWithTs: tsjPreset} = require('ts-jest/presets')
module.exports = {
  preset: 'ts-jest',
  roots: [
    '<rootDir>/pages/',
    '<rootDir>/components/',
    '<rootDir>/test/',
    '<rootDir>/test-resources/',
  ],
  'transform': {
    ...tsjPreset.transform,
  },
  moduleFileExtensions: [
    'js', 'json', 'jsx', 'ts', 'tsx', 'node',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
  ],
  globals: {
    'ts-jest': {diagnostics: false},
  },
}
