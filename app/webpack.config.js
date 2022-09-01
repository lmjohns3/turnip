const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.jsx',
    mode: 'development', //'production',
    module: { rules: [
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: [
                { loader: 'babel-loader',
                  options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
                },
            ]
        },
        {
            test: /\.styl$/,
            exclude: /node_modules/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'stylus-loader',
                  options: { stylusOptions: { use: ['nib'], includeCSS: false } }
                },
            ]
        },
    ] },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '..', 'turnip', 'static'),
    },
    resolve: { fallback: {
        buffer: require.resolve('buffer/'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        url: require.resolve('url/'),
    } },
    plugins: [ new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
    }) ],
}
