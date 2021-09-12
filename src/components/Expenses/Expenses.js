import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from "./ExpensesList";

import './Expenses.css';

const  Expenses = (props) => {
  
  const [filteredYear, setFilterYear] = useState('2020');

    const expenseFilterHandler = (filteredYear) => {
      setFilterYear(filteredYear);
    };

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
      <div>
        <Card className="expenses">
              <ExpenseFilter onChangeFilter={expenseFilterHandler} selected={filteredYear}/>
              <ExpensesList items={filteredExpenses}/>
              
        </Card>
      </div>
    );
}

export default Expenses;