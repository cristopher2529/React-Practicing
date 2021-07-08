import React, { useContext } from 'react';
import classes from './MainNavigation.module.css';

import { Link } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';

const MainNavigation = props => {
    const authContext =  useContext(AuthContext);
    const userIsLoggedIn = authContext.isLogginIn;

    const logoutHandler = () =>{
        authContext.logout();
    }

    return (
        <header className={classes.header}>
            <Link to="/">
                <div className={classes.logo}>React Auth</div>
            </Link>
            <nav>
                <ul>
                    {!userIsLoggedIn && <li>
                        <Link to='/auth'>Login</Link>
                    </li>}
                    {userIsLoggedIn && <React.Fragment>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li> 
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </React.Fragment>}
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;