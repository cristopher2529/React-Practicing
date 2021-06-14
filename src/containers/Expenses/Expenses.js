import React, {useState} from 'react';
import './Expenses.css';

// import ExpenseItem from '../../component/Expenses/ExpenseItem';
import Card from '../../component/UI/Card';
import ExpensesFilter from '../../component/Expenses/ExpensesFilter'
import ExpensesList from '../../component/Expenses/ExpensesList'
import ExpensesChart from '../../component/Expenses/ExpensesChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const itemsFiltered = props.items.filter(item => {
        // console.log(item.date.getFullYear().toString()  , filteredYear);
        return item.date.getFullYear().toString() === filteredYear
    })
    const expenseItems = <ExpensesList items={itemsFiltered} />

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    // console.log(props.items.length);
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {/* {itemsFiltered.length === 0 ? <p style={{color:"white"}}>There's not expense to show</p> : expenseItems} */}
            <ExpensesChart expenses={itemsFiltered} />
            {expenseItems}
        </Card>
    );
}

export default Expenses;