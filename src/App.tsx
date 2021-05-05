import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';

import Signup from './Component/User/Signup'


function App() {

  return (
    <div className="App">
      <Switch>
<Route path="/" component={Signup} />
        </Switch>
    </div>
  );
}

export default App;
