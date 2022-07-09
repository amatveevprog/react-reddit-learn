import express from 'express';
import ReactDom from 'react-dom/server';
import { Header } from '../shared/Header';
import { indexTemplate } from './indexTemplate';

//const express = require('express');
    const app = express();
    app.use('/static', express.static('./dist/client'));
    app.get('/', (req, res) => {
        res.send(
            indexTemplate(ReactDom.renderToString(Header()))
        );
    });
    
    app.listen(3000, () => {
        console.log('server started on http://localhost:3000');
    })
