import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [buttonActive, setButtonActive] = useState(false);
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    setButtonActive(true);
  };

  const desactiveFormHandler = () => {
    setButtonActive(false);
  };

  return (
    <div className="new-expense">
      {!buttonActive && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {buttonActive && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onDesactiveForm={desactiveFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
