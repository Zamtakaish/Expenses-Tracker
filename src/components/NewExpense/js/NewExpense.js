import React, {useState} from 'react';
import '../css/NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    const [isFormVisible, setIsFOrmVisible] = useState(false)

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    function changeFormVisibilityHandler(){
        setIsFOrmVisible(prevState => {
            return !prevState;
        })
    };

    return (isFormVisible ? (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onButtonClicked={changeFormVisibilityHandler}/>
        </div>) : (
        <div className='new-expense'>
            <button onClick={changeFormVisibilityHandler}>Add new expense</button>
        </div>
    )
    );

}

export default NewExpense;