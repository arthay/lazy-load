import express from 'express'
import http from 'http'
import fs from 'fs'
import path from 'path'
import io from 'socket.io';
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import { StaticRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './src/shared/store/redux/configureStore';
import App from './src/App';

const app = express();
const server = http.createServer(app);
const socket = io(server);

app.use('/', express.static('dist'));

app.get('/*', (req, res) => {
    fs.readFile(path.resolve('dist/public/index.html'), 'utf8', (err, data) => {
        if (err) {
            return res.send('An error occurred')
        }

        const context = {};

        const statsFile = path.resolve('./dist/loadable-stats.json');
        const extractor = new ChunkExtractor({ statsFile });
        const store = configureStore({});

        const js = extractor.collectChunks(
            <Provider store={store}>
                <Router location={req.url} context={context}>
                    <App />
                </Router>
            </Provider>
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
socket.on('connection', (socket) => {
    socket.on('buttonClick',(msg) => {
        console.log('message: ' + msg);
    });
});
server.listen(5050, () => {
    console.log(`server is listening at port 5050 http://localhost:5050`);
});
