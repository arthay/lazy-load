import React from 'react';
import loadable from '@loadable/component';
import Panel from  './conponents/Panel';

import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";

// import './App.scss';

const Design = loadable(() => import('./containers/Design'));
const Public = loadable(() => import('./containers/Public'));
const NotFound = loadable(() => import('./containers/404'));

function App() {
    return (
        <div className="app">
            {!process.env.PUBLIC &&  <Panel/>}
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
                <Route path="/design" exact>
                    <Design />
                </Route>
                <Route path="/design/:alias">
                    <Design />
                </Route>
                <Route path="/*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
