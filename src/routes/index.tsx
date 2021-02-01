import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/User';

const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user" component={User} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;