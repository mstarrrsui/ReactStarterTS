import * as React from 'react';

import log from 'loglevel';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';

export default class App extends React.Component  {

    public componentDidMount() {
        log.setDefaultLevel(3);
        log.setLevel(1, true);
        log.debug('App Mounted');
    }

    public render() {
        return (
            <Router>
                <div className="container">
                    <NavBar />
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route render={this.returnNotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }

    private returnNotFound = () => {
        return <p>Not Found</p>;
    }

}
