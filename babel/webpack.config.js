const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    entry: {
        app: path.join(__dirname, 'src/main.js'),
    },
    module: {
        rules: [

        ],
    },
    plugins: [
        
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    }
}