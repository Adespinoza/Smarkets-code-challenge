import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './Header/Header';
import EventContainer from '../containers/EventContainer';

function App() {
  return (
    <div>
    	<Header />
    	
    	<Route exact path="/" component={EventContainer} />
    </div>
  );
}

export default App;
