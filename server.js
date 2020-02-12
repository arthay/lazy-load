import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import Index from './src/index.jsx'

const app = express()

app.use('/static', express.static(path.resolve(__dirname, 'build')));

app.get('/', (req, res) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred')
        }

        const component = ReactDOMServer.renderToString(
            <Router location={req.url} context={{}}>
                <Index />
            </Router>
        );

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${component}</div>`
            )
        )
    })
});

app.listen(3000);