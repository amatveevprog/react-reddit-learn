const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');
const express = require('express');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);
hmrServer.use(webpackDevMiddleware(clientCompiler,{ 
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true, // 
    noInfo: true, // для получения только необходимой информации, исключая webpack-овские сообщения в консоль.
    watchOptions: {
        ignore: '/dist/' // не смотреть сюда, поскольку в этой папке уже скомпилированный код.
    },
    writeToDisk: true, // записывать бандлер в папку /dist/, посколько по умолчанию, 
    // webpack-dev-middleware настроен так, чтобы работать с dev-сервером, он не пишет файлы на диск. Однако, 
    // чтобы раздавать файлы из папки /static/ и hot-update нашим express-сервером, а не webpack-dev-server-ом, 
    // нужно писать эти файлы в папку dist
    stats: 'errors-only', // выключает логи успешной компилляции, они нам не нужны
}));

hmrServer.use(webpackHotMiddleware(clientCompiler,{
    path: '/static/__webpack_hmr', // путь, который указывали в конфиге, тот путь, по которому будем отсылать с сервера сборки hmr.
}));

hmrServer.listen(3001, ()=> {
    console.log(' HMR server successfully started');
});

const compiler = webpack(webpackServerConfig);
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