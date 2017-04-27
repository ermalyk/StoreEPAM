import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';
import './styles/styles.scss';
import '../node_modules/semantic-ui-css/semantic.min.css';
import Constants from './constants/constants.js';
import appReduser from './reducers/category-reducers.js';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import GetCategories from './utils/helpers/GetCategories';
import thunk from 'redux-thunk';

import store from './store';



render(
  <Provider store={store}>
    <Router history = {browserHistory} routes = {routes} />
  </Provider>,
   document.getElementById('app')
);
