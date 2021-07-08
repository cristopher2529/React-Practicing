import React, { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';

import AuthContext from '../../../store/auth-context';
import { useHistory } from 'react-router-dom';

const ProfileForm = props => {
    const authContext = useContext(AuthContext);
    const passwordRef = useRef(null);

    const history = useHistory();

    const submitHandler = event => {
        event.preventDefault();

        const enteredPassword =  passwordRef.current.value;
        const token = authContext.token;
        console.log(`Toke: ${token} - NewPassword: ${enteredPassword}`);

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAmlR-pfJUv2k1ANm85NBKIDQjl5fo3GwY',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                idToken: token,
                password: enteredPassword,
                returnSecureToken:true
            })
        }).then(response => {
            if(response.ok){
                return response.json();
            }else{
                return response.json().then(data => {
                    const errorMessage = 
                        (data && data.error && data.error.message) 
                        ? data.error.message : 'Request Failed!';

                    throw new Error (errorMessage);
                });
            }
        }).then(data => {
            console.log("ProfileForm SUCCESS",data);
            authContext.login(data.idToken);
            history.replace("/");
        })
        .catch(error => console.log("ProfileForm ERROR",error));

    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new=password">New Password</label>
                <input type="password"id='new-password' minLength="5" ref={passwordRef} />
            </div>
            <div className={classes.control}>
                <button>Change Password</button>
            </div>
        </form>
    );
}

export default ProfileForm;