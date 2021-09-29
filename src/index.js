import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Details from './pages/Details';
import reportWebVitals from './reportWebVitals';
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
  uri: 'wss://diverse-trout-25.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': '2NUK4ZsRTp59i4c0XqdR9T48q5PPpn5AbMk8MkBOUBUAB4OOaJ5X3wt29qrnljoU'
      }
    }
  }
});

const httpLink = new HttpLink({
  uri: 'https://diverse-trout-25.hasura.app/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': '2NUK4ZsRTp59i4c0XqdR9T48q5PPpn5AbMk8MkBOUBUAB4OOaJ5X3wt29qrnljoU'
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
            <Route path="/details" exact component={Details} />
          </Switch>
        </Router>
      </Provider>
    </ApolloProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
