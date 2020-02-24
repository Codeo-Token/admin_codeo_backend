import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute ({component: Component, ...rest}) {
  let token = localStorage.getItem('jwtToken');

  return (
    <Route
      {...rest}
      render={(props) => token
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default PrivateRoute