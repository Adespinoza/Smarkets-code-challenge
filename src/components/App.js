import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import 'antd/dist/antd.css';

import Header from './Header/Header';
import EventContainer from '../containers/EventContainer';
import EventInfoContainer from '../containers/EventInfoContainer';


function App() {
  return (
    <div className="App">
    	<Header />

    	<Route exact path="/" component={EventContainer} />
    	<Route exact path="/events/:id" component={EventInfoContainer} />
    </div>
  );
}

export default App;
