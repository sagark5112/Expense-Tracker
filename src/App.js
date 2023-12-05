import React, {useState, useEffect} from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionListing from "./components/TransactionListing";
import ExpenseAnalytics from "./components/ExpenseAnalytics";

let expenseId = 0;
let total = 0;

const App = () => {


  const [expenses, setExpense] = useState([]);
  const [expenseTotal, setExpenseTotal] = useState(0);
  
  const addExpense = (e, expenseTitle, expenseAmount, expenseType) => {
    e.preventDefault();   

    if(expenseTitle.length > 0 && expenseAmount.length > 0) {
      setExpense([...expenses,{ id: expenseId++, expenseTitle: expenseTitle, expenseAmount: expenseAmount, expenseType: expenseType }]);
      
      if(expenseType === 'credit') {
        total = parseInt(total) + parseInt(expenseAmount);
      } else total = parseInt(total) - parseInt(expenseAmount);

      setExpenseTotal(total);
    } else {
      alert("Please enter valid expense")
    }
  }

  return (
    <div className="container-fluid" style={{background: "#f7f7f7", height: "100vh"}}>
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 py-4">
              <div className="calculator-wrapper">
                
                {expenseTotal !== 0 &&
                  <ExpenseAnalytics expenseTotal={expenseTotal} />
                }
                <AddTransaction addExpense={addExpense} />
                {expenses.length > 0 &&
                  <TransactionListing expenses={expenses} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;