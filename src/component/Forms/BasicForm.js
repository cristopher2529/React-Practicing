import React from 'react';
import classes from './BasicForm.module.css';

import useInput2 from '../../hooks/use-input2';

const BasicForm = (props) => {

    const {
      value: name,
      isValid: nameIsValid,
      hasError: nameHasError,
      valueChangeHandler: nameChangeHandler,
      valueBlurHandler: nameBlurHandler,
      reset: nameReset
    } = useInput2( value =>  value.trim() !== '');
    
    // console.log("name",name,"isValid", nameIsValid,"hasError", nameHasError);
    const nameClasses = !nameHasError 
      ? classes['form-control'] 
      : classes['form-control']+' '+classes['invalid'];


    const {
      value: lastName,
      isValid: lastNameIsValid,
      hasError: lastNameHasError,
      valueChangeHandler: lastNameChangeHandler,
      valueBlurHandler: lastNameBlurHandler,
      reset: lastNameReset
    } = useInput2( value => value.trim() !== '');

    const lastNameClasses = !lastNameHasError
      ? classes['form-control'] 
      : classes['form-control']+' '+classes['invalid'];


    const {
      value: mail,
      isValid: mailIsValid,
      hasError: mailHasError,
      valueChangeHandler: mailChangeHandler,
      valueBlurHandler: maileBlurHandler,
      reset: maileReset
    } = useInput2( value => (value.trim() !== '' && value.includes('@')));

    const mailClasses = !mailHasError
      ? classes['form-control'] 
      : classes['form-control']+' '+classes['invalid'];

    const formIsValid = (nameIsValid && lastNameIsValid && mailIsValid);

    const formSubmitHandler = event => {
      event.preventDefault()

      if(formIsValid){
        console.log({
          name,
          lastName,
          mail
        });
      }

      nameReset();
      lastNameReset();
      maileReset();
    }

    return (
      <form onSubmit={formSubmitHandler}>
        <div className={classes['control-group']}>
          <div className={nameClasses}>
            <label htmlFor='name'>First Name</label>
            <input 
              type='text' 
              id='name'
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && <p className={classes["error-text"]}>Name must no be empty.</p>}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor='lastName'>Last Name</label>
            <input 
              type='text' 
              id='lastName' 
              value={lastName}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && <p className={classes["error-text"]}>Last Name must no be empty.</p>}
          </div>
        </div>
          <div className={mailClasses}>
            <label htmlFor='mail'>E-Mail Address</label>
            <input 
              type='text' 
              id='mail' 
              value={mail}
              onChange={mailChangeHandler}
              onBlur={maileBlurHandler}
            />
             {mailHasError && <p className={classes["error-text"]}>Mail must no be empty and must include @.</p>}
          </div>
        <div className={classes['form-actions']}>
          <button type="submit" disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    );
  };
  
  export default BasicForm;