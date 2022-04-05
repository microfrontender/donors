const path = require('path');
module.exports = function() {
  return {
      module: {
          rules: [
              {
                  test: /\.(jpg|png|svg|gif)$/,
                  use: [
                    {
                      loader: `img-optimize-loader`,
                      options: {
                        compress: {
                          // This will transform your png/jpg into webp.
                          // webp: true,
                          optipng: {
                            optimizationLevel: 2,
                          },
                          // pngquant: false,
                          // pngquant: {
                          //   quality: [0.7, 0.8],
                          // },
                          // disableOnDevelopment: true
                        },
                        name: 'img/[name].[ext]',
                      },
                    },
                  ],
                }
          ],
      },
  };
};