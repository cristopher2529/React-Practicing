import React,{useContext} from 'react';

import Login from '../../component/Login/Login';
import Home from '../../component/Home/Home';
import MainHeader from '../../component/MainHeader/MainHeader';
import AuthContext from '../../context/auth-context';

const LoginContainer = (props) => { 
  const context = useContext(AuthContext)

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );

}

export default LoginContainer;