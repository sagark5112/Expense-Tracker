import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionListing = (props) => {

    const renderExpenseList = props.expenses.map((expense) => {
        return (
            <TransactionItem key={expense.id} expense={expense} />
        )
    })

    return (
        <div className="expense-listing">
            <div className="row">
                <div className="col-md-12">
                    <h3>Transaction List</h3>
                    <div className="expense-list">
                        {renderExpenseList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionListing;