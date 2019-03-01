import * as React from 'react';
import { Switch, Route } from 'react-router';

import HomePage from 'src/components/HomePage';

import Ticket from 'src/containers/Ticket';
import Multipla from 'src/containers/Ticket/Multipla';
import Sistema from 'src/containers/Ticket/Sistema';
import ModalBox from 'src/containers/Ticket/ModalBox';



const Routes = () => (
    <Switch>
        <Route exact={true} path={'/'} component={HomePage} />
        <Route path={'/ticket/'} component={Ticket} />
        <Route path={'/multipla/'} component={Multipla} />
        <Route path={'/sistema/'} component={Sistema} />
        <Route path={'/modal/'} component={ModalBox} />
    </Switch>
)

export default Routes;