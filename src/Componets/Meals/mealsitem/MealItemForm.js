import { useRef, useState } from 'react';
// import Cart from '../../Cart/cart';
import Input from '../../UI/input';
import classes from './MealItemForm.module.css';
const MealItemForm = props =>{
    const [amountIsValid, setAmountIsValid]= useState(true);
    const amountInputRef= useRef();

    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || 
        enteredAmountNumber < 1 ||
         enteredAmountNumber > 10000000000)
         {
            setAmountIsValid(false);
            return;
         }
        props.onAddToCart(enteredAmountNumber);
    };
    return(
        <form className={classes.form} onSubmit={submitHandler}>
           <Input 
           ref={amountInputRef}
           label='Amount' 
           input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'',
            step:'1',
            defaultvaluue:'1'

        }}/> 
        

           <button>+ Add</button>
           {!amountIsValid && <p>Please enter a valid amount </p>}
            
        </form>
    )
};
export default MealItemForm