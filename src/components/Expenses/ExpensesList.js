import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (!props.items.length) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  let filteredExpenses = props.items.map((element) => {
    return (
      <ExpenseItem
        title={element.title}
        amount={element.amount}
        date={element.date}
        key={element.id}
      />
    );
  });

  return <ul className="expenses-list">{filteredExpenses}</ul>;
};

export default ExpensesList;
