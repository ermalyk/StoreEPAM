import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/home/HomePage.jsx';
import AboutPage from './components/about/AboutPage.jsx';
import StorePage from './components/store/StorePage.jsx';
import { Segment } from 'semantic-ui-react';

export default (
  <Route path="/" component={App}>

    <Segment>
      <IndexRoute component={HomePage} />
      <Route path="store" component={StorePage}/>
      <Route path="about" component={AboutPage} />
    </Segment>
  </Route>
);
