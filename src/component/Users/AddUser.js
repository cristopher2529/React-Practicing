import React,{useState, useRef} from 'react';
import classes from './AddUser.module.css';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import Wrapper from '../../Herlpers/Wrapper/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [form, setForm] = useState({
        username:'',
        age:1
    });
    const [error, setError] = useState()

    const formChangeHandler = (event, elemt) =>{
        const newValue = event.target.value;
        setForm(prevState => ({
            ...prevState,
            [elemt]:newValue
        }))
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        //Ref
        console.log(nameInputRef.current.value ,ageInputRef.current.value);

        if(form.username.trim().length === 0 || (""+form.age).trim().length ===0){
            setError({
                title:'Invalit input',
                message:"Please enter a valid name and age (non-empty values)."
            });
            return;
        }
        
        if(+form.age < 1){
            setError({
                title:"Invalid age",
                message:"Please enter a valid ege (>0)"
            })
            return;
        }

        // console.log("AddUser",form);
        props.onAddUser(form);

        setForm({
            username:'',
            age:1
        })
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && <ErrorModal tittle={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input} >
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text"  
                        value={form.username} 
                        onChange={(event) => formChangeHandler(event,'username')}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        min="1" 
                        value={form.age}  
                        onChange={(event) => formChangeHandler(event,'age')}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;