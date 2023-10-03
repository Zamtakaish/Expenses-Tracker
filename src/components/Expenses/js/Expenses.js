import React, { useState }  from 'react';
import '../css/Expenses.css'
import Card from "../../UI/js/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [yearFilterValue, setYearFilterValue] = useState('None');
    const [currentExpensesCount, setCurrentExpensesCount] = useState(props.items.length);
    let filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === yearFilterValue
    })

    if (yearFilterValue === 'None')  {
        filteredExpenses = props.items;
    }

    let filterInfoText;

    if (currentExpensesCount < props.items.length){
        setYearFilterValue('None');
        setCurrentExpensesCount(props.items.length);
    }

    if (yearFilterValue === '2019') {
        filterInfoText = '(Data for 2020, 2021 & 2022 is hidden.)';
    } else if (yearFilterValue === '2020') {
            filterInfoText = '(Data for 2019, 2021 & 2022 is hidden.)';
    } else if (yearFilterValue === '2021') {
        filterInfoText = '(Data for 2019, 2020 & 2022 is hidden.)';
    }else if (yearFilterValue === '2022') {
        filterInfoText = '(Data for 2019, 2020 & 2021 is hidden.)';
    }
    else {
        filterInfoText = '';
    }

    function expenseFilterHandler(year) {
        setYearFilterValue(year);
    }

    return (
            <Card className='expenses'>
                <ExpenseFilter selectedFilter={yearFilterValue} onApplyFilter={expenseFilterHandler}/>
                <p className='filter_announcement'>{filterInfoText}</p>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
    );
}

export default Expenses;
