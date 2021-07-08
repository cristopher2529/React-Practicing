import React, { useContext, useRef, useState } from 'react';
import classes from './AuthForm.module.css';

import AuthContext from '../../../store/auth-context';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef =  useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const authContext = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = event => {
    event.preventDefault();

    const enteredEmail =  emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //validations

    setIsLoading(true)

    let url = '';  
    if(isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmlR-pfJUv2k1ANm85NBKIDQjl5fo3GwY';
    }else{
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmlR-pfJUv2k1ANm85NBKIDQjl5fo3GwY';
    }

    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      })
    }).then(response => {
      setIsLoading(false);

      if(response.ok){
        //...Ok answer
        return response.json();
      }else{
        //not OK answer
        return response.json().then(data => {
          let errorMessage = 'Authentication faild!'; 
          if(data && data.error && data.error.message){
            errorMessage = data.error.message
          }
          console.log(errorMessage);
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
      authContext.login(data.idToken, expirationTime.toISOString());
      history.replace("/");

    })
    .catch(error => alert(error));
    // .finally(() => setIsLoading(false));
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordInputRef} required />
        </div>
        <div className={classes.actions}>
          {isLoading && <p>Sending request...</p>}
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
