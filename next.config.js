/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = config => {
  // Fixes npm packages that depend on `fs` module
  config.node = {
    fs: 'empty',
  }
  return config
}

const prodConfig = {
  publicRuntimeConfig: {
    API_ENDPOINT: 'https://ebedregator-nextjs.now.sh/api/',
  },
  
}

const devConfig = {
  publicRuntimeConfig: {
    API_ENDPOINT: 'http://localhost:3000/api/',
  },
  webpack,
}

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig
