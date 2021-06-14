import React from 'react';
import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {

    if(props.items.length === 0)
        return <h2 className="expenses-list__fallback">Found no expenses</h2>

    const expenseItems = props.items.map(item => (
        <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
    ))
    

    return (
        <ul className="expenses-list">
            {expenseItems}
        </ul>
    );
}

export default ExpensesList;