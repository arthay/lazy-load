import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import Ex from './src/Ex';

const app = express();

app.use('/', express.static('src'));

app.get('/', (req, res) => {
    fs.readFile(path.resolve('./dist/public/index.html'), 'utf8', (err, data) => {
        if (err) {
            return res.send('An error occurred')
        }

        const component = ReactDOMServer.renderToString(
            <Ex />
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