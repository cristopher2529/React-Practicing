import React from 'react';
import './ReduxUdemy.css';

import {useSelector} from 'react-redux';

import Counter from '../../component/ReduxUdemy/Counter';
import Auth from '../../component/ReduxUdemy/Auth';
import Header from '../../component/ReduxUdemy/Header';
import UserProfile from '../../component/ReduxUdemy/UserProfile';

const ReduxUdemy = props => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    
    return (
        <React.Fragment>
            <Header />
            {!isAuth && <Auth />}
            {isAuth && <UserProfile />}
            <Counter />
        </React.Fragment>
    );
}

export default ReduxUdemy;