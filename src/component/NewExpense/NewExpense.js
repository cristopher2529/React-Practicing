import React from 'react';
import './ExpenseForm.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (formValues) => {
        // console.log("NewExpense",formValues);
        props.onAddExpense(formValues);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;