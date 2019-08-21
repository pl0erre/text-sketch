//Basic
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Utils
import Auth from "../Utils/Auth";
const auth = new Auth();


const ProtectedRoute  = ({component: Component, redirectUrl, ...rest}) => {
  return (
    <Route
      {...rest}
      render={ props  => {
        var user = auth.getUser();
        if(user){
          return <Component {...props} />
        } else {
          return <Redirect to={{pathname: redirectUrl || '/', state: {from: props.location}}} />
        }
      }}
    />
  )
}
export default ProtectedRoute;