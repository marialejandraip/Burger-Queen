import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/views/Home';
import Waiter from './components/views/Waiter';
import NotFound from './components/views/NotFound';
import Kitchen from './components/views/Kitchen';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/waiter' component={Waiter} />
        <Route path='/kitchen' component={Kitchen} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
