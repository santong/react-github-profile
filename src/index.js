import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {ApolloClient, createNetworkInterface, ApolloProvider} from 'react-apollo';
import config from './config'

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import routes from './routes';

const networkInterface = createNetworkInterface({
    uri: 'https://api.github.com/graphql',
});

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
);

networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {};  // Create the header object if needed.
        }
        req.options.headers.authorization = `Bearer ${config.token}`;
        next();
    }
}]);

const client = new ApolloClient({
    networkInterface: networkInterface
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <div className="App">
                {routes.config.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </div>
        </Router>
    </ApolloProvider>,
    document.getElementById('root'));
registerServiceWorker();
