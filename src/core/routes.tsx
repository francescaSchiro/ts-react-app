import * as React from 'react';
import { Route, Switch } from 'react-router';
import App from 'src/containers/App';


export default function Routes() {
    return (
        <Switch>
            <Route exact={true} path='/' component={App} />
        </Switch>
    );
}