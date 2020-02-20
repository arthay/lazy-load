import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './shared/store/redux/configureStore';

import './index.scss';
import App from './App';

const store = configureStore();

function Main() {
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
}
loadableReady(() => {
    ReactDOM.hydrate(<Main />, document.getElementById('root'));
});
