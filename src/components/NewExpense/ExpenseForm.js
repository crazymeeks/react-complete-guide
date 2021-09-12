import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value};
        });
    };
    
    
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        // If the state update depends on previous state,
        // use this style intead of the above.This will
        // guarantee that you always operate on the latest
        // snapshot because react does not update instantly,
        // it's on scheduled basis.
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value};
        });
    };

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value};
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        userInput.enteredDate = new Date(userInput.enteredDate);
        
        props.onSaveExpenseData({
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: userInput.enteredDate,
        });

        props.toggleForm(event, false);

        // Reset form
        setUserInput(() => {
            return {
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: '',
            };
        });

    };


    const handleCancelButton = (event) => {
        event.preventDefault();
        props.toggleForm(event, false);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler} min="2021-01-01" max="2022-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={handleCancelButton}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;