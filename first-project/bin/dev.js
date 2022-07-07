const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webpackConfig);
// cold start 
compiler.run((err) => {
    if (err) {
        console.log('Compilation failed: ', err);
    }
    else {
        compiler.watch({}, (err) => {
            if (err) {
                console.log('Compilation failed: ', err);
            }
            else {
                console.log('Compilation was successful');
            }
        });
        nodemon({
            script: path.resolve(__dirname, '../dist/server/server.js'),
            watch: [
                path.resolve(__dirname, '../dist/server/'),
                path.resolve(__dirname, '../dist/client/'),
            ]
        })
    }
});