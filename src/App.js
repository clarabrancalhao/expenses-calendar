import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 96.56,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e3',
      title: 'New TV',
      amount: 799.99,
      date: new Date(2021, 2, 12),
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
