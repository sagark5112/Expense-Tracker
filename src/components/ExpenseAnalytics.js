import React, { useState } from "react";

const ExpenseAnalytics = (props) => {
  return (
    <div className="analytics-block mt-3">
      <div className="row">
        <div className="col-md-12">
          <h3>Your Balance: {props.expenseTotal}</h3>
          {props.expenseTotal < 100 ? "You're running low on balance" : null}
        </div>
      </div>
    </div>
  );
};

export default ExpenseAnalytics;
