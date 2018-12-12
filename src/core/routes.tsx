import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Lives from 'src/containers/Lives';


export default function Routes() {
    return (
        <Switch>
            <Route exact={true} path='/lives' component={Lives} />
            <Redirect from='' to='/' />
        </Switch>
    );
}