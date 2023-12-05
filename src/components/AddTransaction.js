import React, { useState } from "react";

const AddTransaction = (props) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseType, setExpenseType] = useState("");

  return (
    <div className="add-transaction-block">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">Add Transaction</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="expenseTitle" className="form-label m-0">
                Expense Title
              </label>
              <input
                type="text"
                className="form-control"
                id="expenseTitle"
                placeholder="Food/Travel/Entertainment.."
                value={expenseTitle}
                onChange={(e) => setExpenseTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="input-group mb-3">
                <div className="input-group-prepend d-flex w-100">
                  <select className="custom-select h-100" onChange={(e) => setExpenseType(e.target.value)}>
                    <option value="default">Expense Type</option>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                  </select>
                  <div className="input-group ms-2">
                    <span className="input-group-text" id="basic-addon1">
                      ₹
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Amount"
                      value={expenseAmount}
                      onChange={(e) => setExpenseAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={(e) => {
                  props.addExpense(e, expenseTitle, expenseAmount, expenseType);
                  setExpenseTitle("");
                  setExpenseAmount("");
                }}
              >
                Add Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
