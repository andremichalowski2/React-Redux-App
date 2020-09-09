import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { statsReducer } from './Reducers/statsReducer';

// import { combineReducers } from './Reducers/index'

const store = createStore(statsReducer, applyMiddleware(thunk));
// const store = createStore(combineReducers, applyMiddleware(thunk, logger));
// const store = createStore(() => {}, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
