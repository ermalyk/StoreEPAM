import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';
import './styles/styles.scss';
import '../node_modules/semantic-ui-css/semantic.min.css';

render(
  <Router history = {browserHistory} routes = {routes} />,
  document.getElementById('app')
);
