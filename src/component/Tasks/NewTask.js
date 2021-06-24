import React, { useRef } from 'react';
import classes from './NewTask.module.css';

import Section from '../UI/Section/Section';

const NewTask = props => {

    const textRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        let newTask = textRef.current.value;

        if(newTask.trim().length > 0)
            props.onAddTask(newTask);
    }

    return (
        <Section>
            <form onSubmit={submitHandler} className={classes.form}>
                <input type="text" ref={textRef}/>
                <button>Add Task</button>
            </form>
        </Section>
    );
}

export default NewTask;