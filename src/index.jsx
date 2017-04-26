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
// import promise from 'redux-promise-middleware';

const getCategoriesMW = () => {
  return (next) => (action) => {
     GetCategories.getCategories().then(
        data => {
          console.log('data', data);
          return data;
        },
        err => {
          console.error('Uups');
          return {};
        });
  };
};

const getC = () => {
  GetCategories.getCategories().then(
    data => {
      console.log('data', data);
      return data;
    },
    err => {
      console.error('Uups');
      return {};
    });
};

// GetCategories.getCategories().then(
//   data => {
//     categories:
//   });
//     console.log('expandCategories', this.state.expandCategories);
//   },
//   err => {
//     console.error('Uups');
//   });
// ,
//    document.getElementById('app')
const store = createStore(
  appReduser,
  {},
  getC()
);

store.subscribe(() => {
  console.log('store.getState()', store.getState());
});

store.dispatch({type: 'A'});
console.log('--------------', store.getState());
// applyMiddleware(getCategoriesMW)
render(
  <Provider store={store}>
    <Router history = {browserHistory} routes = {routes} />
  </Provider>,
   document.getElementById('app')
);
