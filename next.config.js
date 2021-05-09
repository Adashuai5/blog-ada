module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          options: {
            outputPath: 'static',
            publicPath: '_next/static',
            name: '[path][name].[ext]',
          },
          loader: 'file-loader',
        },
      ],
    })

    return config
  },
}
