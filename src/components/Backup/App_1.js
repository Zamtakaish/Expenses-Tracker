import React, { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses/js/Expenses";
import NewExpense from "./components/NewExpense/js/NewExpense";

function App() {

    const DUMMY_EXPENSES = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    const [filteredExpenses, setFilteredExpenses] = useState(DUMMY_EXPENSES)

    function addExpenseHandler(expense) {
        setFilteredExpenses([expense, ...expenses]);
        setExpenses(prevExpenses => [expense, ...prevExpenses]);
    }

    function filterExpenseByYearHandler(year) {
        setFilteredExpenses(() => {
                switch (year) {
                    case "2019":
                        return expenses.filter(item =>
                            item.date.getFullYear() === 2019
                        )
                    case "2020":
                        return expenses.filter(item =>
                            item.date.getFullYear() === 2020
                        )
                    case "2021":
                        return expenses.filter(item =>
                            item.date.getFullYear() === 2021
                        )
                    case "2022":
                        return expenses.filter(item =>
                            item.date.getFullYear() === 2022
                        )
                    default:
                        return expenses
                }
            }
        )
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={filteredExpenses} onApplyYearFilter={filterExpenseByYearHandler} />
        </div>
    );
}

export default App;
