import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import api from "./middleware/api/api";
import {BrowserRouter as Router} from "react-router-dom";
import Root from "./containers/router";

const store = createStore(
    reducers,
    applyMiddleware(thunk, api)
);

ReactDOM.render(
  <Router >
    <Root store={store}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
