import React from 'react';
import classes from './UsersList.module.css';

import Card from '../UI/Card/Card';

const UsersList = props =>{

    return props.users.length >0 && (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user,index) => <li key={index}> {user.username} ({user.age} years old)</li>)}
            </ul>
        </Card>
    )
}

export default UsersList;