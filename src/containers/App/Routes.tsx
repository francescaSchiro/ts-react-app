import * as React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from 'src/containers/HomePage';
import Ticket from 'src/containers/Ticket';


const Routes = () => (
    <Switch>
        <Route exact={true} path={'/'} component={HomePage} />
        <Route path={'/ticket/'} component={Ticket} />
    </Switch>
)

export default Routes;