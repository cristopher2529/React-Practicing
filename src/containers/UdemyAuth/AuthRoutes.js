import React, { useContext } from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import HomePage  from '../../Pages/AuthUdemy/HomePage';
import AuthPage  from '../../Pages/AuthUdemy/AuthPage';
import ProfilePage  from '../../Pages/AuthUdemy/ProfilePage';

const AuthRoutes = props =>{
    const authContext = useContext(AuthContext);

    return <Switch>
        <Route path="/" exact>
            <Redirect to='/home' />
        </Route>
        <Route path="/home">
            <HomePage />
        </Route>
        {!authContext.isLogginIn  && 
        <Route path='/auth'>
            <AuthPage />
        </Route>}
        <Route path="/profile">
            {authContext.isLogginIn && <ProfilePage />}
            {!authContext.isLogginIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
            <Redirect to="/home" />
        </Route>
    </Switch>
}

export default AuthRoutes;