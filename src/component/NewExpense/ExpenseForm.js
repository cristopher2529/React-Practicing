import React,{useState} from 'react';
import './NewExpense.css';

const ExpenseForm = (props) => {

    const [form, setForm] = useState({
        title:"",
        amount:"0.01",
        date:"2019-01-01",
        counter:0
    })

    const changeHandler = (event, elemt) => {
        const value = event.target.value
        // console.log("Changed!!", value, elemt);
        setForm((prevState) => {
            return {
                ...prevState,
                [elemt]:value,
                counter: ++prevState.counter
            }
        })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // var day = 60 * 60 * 24 * 1000;
            
        // console.log("ExpenseForm",form.date,{
        //     ...form,
        //     date: new Date(form.date)+day,
        //     id:Math.random()
        // });

        // for(let elemt in dataToSubmit){
        //     dataToSubmit[elemt] = ""
        // }
        // setForm({...dataToSubmit})
        
        props.onSaveExpenseData({
                ...form,
                date: new Date(form.date),
                amount: +form.amount,
                id:Math.random()
            })

        setForm((prevState) => ({
            ...prevState,
            title:"",
            amount:"0.01",
            date:"2019-01-01",
        }));
    }
 
    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Contador: <b>{form.counter}</b></label>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={form.title} onChange={(event) => changeHandler(event, "title")}></input>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={form.amount} onChange={(event) => changeHandler(event,'amount')}></input>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={form.date} onChange={(event) => changeHandler(event,'date')}></input>
                </div>
            </div>
            <div className="new-expese__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;