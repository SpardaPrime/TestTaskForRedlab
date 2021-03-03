const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports=()=>{
    return{
        entry: path.join(__dirname,'src','index.js'),
        output:{
            path:path.join(__dirname,'dist'),
            filename:'main.js',
        },
        module:{
            rules:[
                {
                    test:/.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                          presets: ['@babel/preset-env'],
                          plugins: ["@babel/plugin-transform-runtime"]
                        }
                      }
                },
                {
                    test:/\.(jpe?g|png|gif|svg)$/i,
                    use:[{
                        loader:'file-loader',
                        options:{
                            outputPath: 'images',
                            name:'[name].[ext]'
                        },
                    }]
                }
            
            ]
        },
        plugins:[
            
            new HtmlWebpackPlugin({
                title:'Redlab test task',
                template:path.join(__dirname, 'index.html'),
                publicPath:'',
                favicon:path.join(__dirname,'public','favicon','favicon.ico')
            }),
            new CopyPlugin({
                patterns: [
                  { from: "public", to: "public" },
                ],
              }),
        ]
    }
}