const StylelintPlugin = require('stylelint-webpack-plugin')
plugins: [
  new StylelintPlugin({
    files: [
      'src/**/*.vue',
      'src/**/*.scss'
    ]
  })
]

module.exports = {
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? `${process.env.VUE_APP_S3_HOST}/${process.env.VUE_APP_S3_BUCKET_NAME}/${
      process.env.VUE_APP_S3_SEGMENT_PATH
      }`
      : '/'
}
