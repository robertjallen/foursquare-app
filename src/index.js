import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducer/reducer'
import App from './App';

const store  = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


