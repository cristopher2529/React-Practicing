import React, { useState, useReducer,useEffect, useContext, useRef} from 'react';


import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) =>{
  if(action.type === "USER_INPUT"){
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === "INPUT_BLUR"){
    return {value: state.value, isValid: state.value.includes('@')}
  }
  if(action.type ==="INPUT_VALIDATE"){
    console.log(state, action);
    return {value: state.value, isValid: state.value.includes('@')}
  }

  return {value: '', isValid:false}
}

const passwordReducer = (state, action) => {

  let result = {value: '', isValid: false};
  switch (action.type) {
    case "PASSWORD_INPUT":
      result = {value: action.val, isValid: action.val.trim().length > 6}
      break;
    case "PASSWORD_BLUR":
      result = {value: state.value, isValid: state.value.trim().length > 6}
      break;
    default:
      break;
  }

  return result;
}

const Login = (props) => {
  const context = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid:false})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: false})

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("UseEffect and UseReducer");
  //     dispatchEmail({tipe: "INPUT_VALIDATE"})
  //   }, 500);

  //   return () => {
  //     clearTimeout(timer)
  //   }
  // },[emailState]);

  // useEffect(() => {
  //   console.log("Effect running");

  //   return () => {
  //     console.log("Effect CleanUp");
  //   }
  // },[])

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Cheking form validity");
      setFormIsValid(
        emailIsValid&& passwordIsValid
      );
    },500)
    
    return () => {
      console.log("CLEANUP");
      clearTimeout(timer)
    }
  },[emailIsValid,passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type:'USER_INPUT',val: event.target.value})

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:"PASSWORD_INPUT", val: event.target.value})

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.isValid
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:"INPUT_BLUR"});

    // setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:"PASSWORD_BLUR"});
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if(formIsValid)
      context.onLogin(emailState.value, passwordState.value);
    else if(!emailState.isValid){
      emailInputRef.current.focusRef();
    }else{
      passwordInputRef.current.focusRef();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailState.isValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input 
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
