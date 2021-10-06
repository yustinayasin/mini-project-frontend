import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Sale from './pages/Sale';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import ConfirmCheckout from './pages/ConfirmCheckout';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import Register from './pages/Register';
import Reset from './pages/Reset';
import { BrowserRouter as Router, withRouter, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split
} from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { store } from './app/store'
import { Provider } from 'react-redux';

const wsLink = new WebSocketLink({
  uri: 'wss://login-kemejaku.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': 'LWE7d1e3y33fFmJwBbKzt01fy4ZQC6zMKqlRX1aWrGn2jtm3Z1rSuNDPu0TE8Fjk'
      }
    }
  }
});

const httpLink = new HttpLink({
  uri: 'https://login-kemejaku.hasura.app/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'LWE7d1e3y33fFmJwBbKzt01fy4ZQC6zMKqlRX1aWrGn2jtm3Z1rSuNDPu0TE8Fjk'
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sale" exact component={Sale} />
            <Route path="/details/:id" exact component={Details} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/confirm-checkout" exact component={ConfirmCheckout} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/reset" exact component={Reset} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
