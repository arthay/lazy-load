import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import App from './App';

function Ex() {
    return (
        <Router>
            <App />
        </Router>
    )
}
loadableReady(() => {
    ReactDOM.hydrate(<Ex />, document.getElementById('root'));
});
