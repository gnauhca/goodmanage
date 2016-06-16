var webpack = require('webpack')

module.exports = {
    entry: './index.es6',
    output: {
        path: __dirname,
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            { test: /css.*?\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            vue: "vue/dist/vue.common.js"
        })
    ]
}
