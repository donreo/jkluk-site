import React, { Fragment } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { HomePage, NotFound, Page, Preview } from './pages';

const App = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <TransitionGroup>
          <CSSTransition
            key={window.location}
            classNames={'fade'}
            timeout={{ enter: 300, exit: 300 }}
            >
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/preview' component={Preview} />
            <Route exact path='/:uid' component={Page} />
            <Route component={NotFound} />
          </Switch>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
