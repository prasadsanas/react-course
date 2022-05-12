import "./Expense.css";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expenses.title}
        amount={props.expenses.amount}
        date={props.expenses.date}
      />
    </div>
  );
}
export default Expense;
