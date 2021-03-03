const path= require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports=()=>{

    return merge(common(),{
        mode:'development',
        devtool:'eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 3000,
            index: 'index.html',
            historyApiFallback: {
                disableDotRule: true,
              },
        },
        module:{
            rules:[
                {
                    test:/.s?css$/,
                    use:['style-loader','css-loader','sass-loader']
                }
            ]
        },
        plugins:[
            new CleanWebpackPlugin({cleanStaleWebpackAssets:false}),
        ]
    });
}