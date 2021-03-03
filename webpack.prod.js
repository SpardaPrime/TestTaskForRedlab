const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');

module.exports=()=>{
    return merge(common(),{
        mode:'production',
        watch:false,
        devtool:false,
        module:{
            rules:[
                {
                    test:/.s?css$/,
                    use:[ MiniCssExtractPlugin.loader,'css-loader','sass-loader']
                }
            ]
        },
        plugins:[
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename:'[name].css',
            }),
            new CssMinimizerPlugin(),
            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                      ['gifsicle', { interlaced: true }],
                      ['jpegtran', { progressive: true }],
                      ['optipng', { optimizationLevel: 5 }],
                      [
                        'svgo',
                        {
                          plugins: [
                            {
                              removeViewBox: false,
                            },
                          ],
                        },
                      ],
                    ],
                  },
            }),
        ]
    });
}