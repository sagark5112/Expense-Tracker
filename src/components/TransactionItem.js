import React from "react";

const TransactionItem = (props) => {

    return (
        <div className={`expense-item ${props.expense.expenseType === 'credit' ? 'credit' : 'debit'}`}>
            <span className="item-title">
                {props.expense.expenseTitle}
            </span>
            <strong className="item-amount">
                {props.expense.expenseType == 'debit' ? "-" : ""}{props.expense.expenseAmount}
            </strong>
            
        </div>
    )
}

export default TransactionItem;