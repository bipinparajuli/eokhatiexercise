import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';

import Signup from './Component/User/Signup'
import Signin from "./Component/User/Signin"
import Home from "./Component/User/Home"
import PrivateRoute from './Component/auth/Privateroute'
import {ToastContainer} from "react-toastify"

function App() {

  return (
    <div className="App">
<ToastContainer />
      <Switch>

        {/* custom routes */}
<Route path="/" exact component={Signup} />
<Route path="/signin" exact component={Signin} />

{/* privateroutes */}

<PrivateRoute exact path="/home" component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
