import React, { ReactNode } from 'react'
import {Route,Redirect} from 'react-router-dom'
import {isAuthenticated} from './index'

const PrivateRoute = ({ component:Component, ...rest }) => {
  
  // console.log("check",isAuthenticated() )
  
  return (
      <Route
        {...rest}
        render={(props) =>
             isAuthenticated() == true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute
  
  