const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        'dist/script.js': './js/app.js',
        'dist/main.css~': './style/main.scss'
    },
    output: {
        path: __dirname + '/',
        filename: '[name]'
    },
    watch: true,
    devtool: 'eval-source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test: /\.(png|jpg|gif)$/,
                // include: path.join(__dirname, 'images'),
                loader: 'url-loader?limit=1000000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./dist/style.css'),
        new LiveReloadPlugin()
    ]


}
