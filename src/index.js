import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger,thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

  );