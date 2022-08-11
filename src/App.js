import ExpensesChart from './components/expensesChart';
import data from './utils/data.json';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ExpensesChart data={data} />
    </div>
  );
}

export default App;
