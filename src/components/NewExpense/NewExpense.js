import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [isAddNewExpenseButtonClick, setIsAddNewExpenseButtonClick] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData =  {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
    };

    const handleAddNewExpenseEvent = (event) => {
        event.preventDefault();
        setIsAddNewExpenseButtonClick(true);
    };

    /**
     * Toggle form display
     * 

     
     * @param {} event 
     * @param {*} status 
     */
    const toggleForm = (event, status = false) => {
        event.preventDefault();
        setIsAddNewExpenseButtonClick(status);
    };

    return (
        <div className="new-expense">
            {isAddNewExpenseButtonClick === false ? <button onClick={handleAddNewExpenseEvent}>Add New Expense</button> : <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleForm={toggleForm}/>}
        </div>
    );
};

export default NewExpense;