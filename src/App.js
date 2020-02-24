import React from 'react'
import setAuthToken from './helper/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import store from './helper/store';
import PrivateRoute from './helper/PrivateRoute';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import UserManagement from './components/UserManagement';

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}

function App(){
    return(
        <Provider store = { store }>
            <Router>
                <div className="App">
                <PrivateRoute path='/' exact={true} component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path='/user-management' component={UserManagement} />
                </div>
            </Router>
        </Provider>
    )
}

export default App