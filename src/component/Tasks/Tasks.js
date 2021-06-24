import React from 'react';
import classes from './Tasks.module.css';

import TaskItem from './TaskItem';
import Section from '../UI/Section/Section';

const Tasks = props => {

    return (
        <Section>
            <div className={classes.container}>
                <ul>
                    {props.tasks.map( task => (
                        <TaskItem key={task.id}>{task.text}</TaskItem>
                    ))}
                </ul>
            </div>
        </Section>
    );
}

export default Tasks;