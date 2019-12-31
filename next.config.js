/* eslint-disable @typescript-eslint/no-var-requires */
const CopyWebpackPlugin = require('copy-webpack-plugin')

// const path = require('path')
// const resources = path.join(__dirname, 'resources')

module.exports = {
  env: {
    PROJECT_DIRNAME: __dirname,
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: 'resources',
          to: 'resources',
        },
      ]),
    )
    return config
  },
}
