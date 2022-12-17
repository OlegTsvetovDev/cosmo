const isBuild = process.argv.includes('--build')
const webpackConfig = {
  mode: isBuild ? 'production' : 'development',
  entry: {
    'main.min': './src/js/main.js',
    // '': './src/js/',
  },
  output: {
    filename: '[name].js'
  }
}


export { webpackConfig }
