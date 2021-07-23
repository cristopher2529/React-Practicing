import React, { useContext } from 'react';
import classes from './Auth.module.css';

import Card from './UI/Card';
import { AuthContext } from '../../context/auth2-context';

const Auth = () => {
    const authContext = useContext(AuthContext);

    const loginHandler = () => {
        authContext.login();
    }

    return (
        <div className={classes.auth}>
            <Card>
                <h2>You are not authenticated</h2>
                <p>Please log in to continue.</p>
                <button onClick={loginHandler}>Log in</button>
            </Card>
        </div>
    );
}

export default Auth;