import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import App from './src/App';

const app = express();

app.use('/', express.static('dist'));

app.get('/*', (req, res) => {
    fs.readFile(path.resolve('dist/public/index.html'), 'utf8', (err, data) => {
        const context = {};

        if (err) {
            return res.send('An error occurred')
        }

        const component = ReactDOMServer.renderToString(
            <Router location={req.url} context={context}>
                <App />
            </Router>
        );
// return res.send(data);
        if (context.url) {
            res.writeHead(301, { Location: context.url });
            res.end()
        } else {
            res.send(
                data.replace(
                    '<div id="root"></div>',
                    `<div id="root">${component}</div>`
                )
            )
        }
    })
});

app.listen(3000);