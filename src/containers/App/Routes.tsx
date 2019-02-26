import * as React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from 'src/components/HomePage';

import Ticket from 'src/containers/Ticket';
import Multipla from 'src/containers/Ticket/Multipla';
import Sistema from 'src/containers/Ticket/Sistema';



const Routes = () => (
    <Switch>
        <Route exact={true} path={'/'} component={HomePage} />
        <Route path={'/ticket/'} component={Ticket} />
        <Route path={'/multipla/'} component={Multipla} />
        <Route path={'/sistema/'} component={Sistema} />
    </Switch>
)

export default Routes;