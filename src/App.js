import React from 'react';
import loadable from '@loadable/component'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import './App.scss';

const Design = loadable(() => import('./containers/Design'));
const Public = loadable(() => import('./containers/Public'));

function App() {
    return (
        <Router>
            <div className="app">
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <NavLink to="/">Public</NavLink>
                        </li>
                        <li>
                            <NavLink to="/design">Design</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/" exact>
                        <Public />
                    </Route>
                    <Route path="/design">
                        <Design />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
