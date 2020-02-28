// eslint-disable-next-line @typescript-eslint/no-var-requires
const {jsWithTs: tsjPreset} = require('ts-jest/presets')
module.exports = {
  preset: 'ts-jest',
  'transform': {
    ...tsjPreset.transform,
  },
  moduleFileExtensions: [
    'js', 'json', 'jsx', 'ts', 'tsx', 'node',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/dist/',
    'backend/beresalexandra/food-types/fozelek.test.ts',
  ],
  globals: {
    'ts-jest': {diagnostics: false},
  },
}
