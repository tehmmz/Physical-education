import React, { Component } from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import News from './components/News/News';
import Gallery from './components/Gallery/Gallery';
import Education from './components/Education/Education';
import Error from './components/404/Error';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" component={() => <Main />} exact />
            <Route path="/news" component={() => <News />} />
            <Route path="/activity" component={() => <Gallery />} />
            <Route path="/education" component={() => <Education />} />
            <Route component={() => <Error />} />
          </Switch>
          {/* <Footer /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
