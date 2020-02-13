import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import { StaticRouter as Router } from 'react-router-dom'
import App from './src/App';

const app = express();

app.use('/', express.static('dist'));

app.get('/*', (req, res) => {
    fs.readFile(path.resolve('dist/public/index.html'), 'utf8', (err, data) => {
        if (err) {
            return res.send('An error occurred')
        }

        const context = {};

        const statsFile = path.resolve('./dist/loadable-stats.json');
        const extractor = new ChunkExtractor({ statsFile });
        const js = extractor.collectChunks(
            <Router location={req.url} context={context}>
                <App />
            </Router>
        );
        const component = ReactDOMServer.renderToString(js);

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