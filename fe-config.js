
let proxy = {
  '/fishVideo/': {
    target: 'https://mip.yesky.com',
    changeOrigin: true
  }
}

let entry = ['index']

let vendor = [
  'react',
  'react-dom',
  'react-router',
  'react-router-dom',
  'axios',
  'redux',
  'react-redux',
  'redux-thunk',
  'react-loadable'
]

let baseUrl = '/'
let title= 'react-cli-tmp-ts'

module.exports = {
  vendor,
  entry,
  proxy,
  baseUrl,
  title
}