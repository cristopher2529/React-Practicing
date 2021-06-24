import React from 'react';
import classes from './SimpleInput.module.css';

import useInput from '../../hooks/use-input';

const SimpleInput = () => {
  const {
    value: enteredName, 
    hasError: nameInputHasError, 
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredMail,
    hasError: enteredMailHasError,
    isValid: enteredMailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    reset: resetMail
  } = useInput((value) => {
    return (value.trim() !== '' && value.includes('@'));
  })

  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false)

  // const enteredNameIsValid = enteredName.trim() !== '';
  // const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;
  if(enteredNameIsValid && enteredMailIsValid){
    formIsValid = true;
  }


  const formSubmitHandler = event =>{
    event.preventDefault();
    // setEnteredNameTouched(true);
    
    if(!enteredNameIsValid || !enteredMailIsValid){
      return;
    }

    console.log(enteredName);

    resetName();
    resetMail();
  }
  
  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value);
  // }
  

  // const nameInputBlurHandler = event =>{
  //   setEnteredNameTouched(true);
  // }
  
  
  const nameInputClasses = enteredNameIsValid 
    ? classes["form-control"]+' '+classes["invalid"]
    : classes["form-control"];

  const mailInputClasses = enteredMailIsValid
    ? classes["form-control"]+' '+classes["invalid"]
    : classes["form-control"];

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses} >
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangeHandler} 
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className={classes["error-text"]}>Name must not be empty.</p>}
      </div>

      <div className={mailInputClasses} >
        <label htmlFor='mail'>Your Name</label>
        <input 
          type='mail' 
          id='mail' 
          onChange={mailChangeHandler} 
          onBlur={mailBlurHandler}
          value={enteredMail}
        />
        {enteredMailHasError && <p className={classes["error-text"]}>Mail must not be empty and also has to include an @.</p>}
      </div>

      <div className={classes["form-control"]} >
        <button 
          className={classes["button"]} 
          disabled={!formIsValid}>
            Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
 