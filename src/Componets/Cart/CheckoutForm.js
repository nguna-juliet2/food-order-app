import classes from './CheckoutForm.module.css';
import { useRef, useState } from 'react';

const isEmpty = value => value.trim() ==="";
const isFiveChars = value => value.trim().length === 5 ;

const Checkout = (props) => {
    // const [CartIsEmpty, SetIsCartEmpty]= useState(false);
    const [isformInputValidity, setIsFormInputValidity]= useState({
        name:true,
        street:true,
        postalcode:true,
        city:true,
        
    })

  //   const onClickHander=()=>{
  //     SetIsCartEmpty(false)
  // };


    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalcodeInputRef = useRef();
    const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet =  streetInputRef.current.value;
    const enteredPostalcode = postalcodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredpostalcodeIsValid = isFiveChars(enteredPostalcode);
    const enteredCityIsValid = !isEmpty(enteredCity);
    setIsFormInputValidity({
        name:enteredNameIsValid,
        street:enteredStreetIsValid,
        city:enteredCityIsValid,
        postalcode:enteredpostalcodeIsValid
    })
    const formIsValid = enteredCityIsValid && enteredStreetIsValid &&
     enteredpostalcodeIsValid && enteredCityIsValid;


     if(!formIsValid){
        return;
     }
     props.onConfrim ({
        name:enteredName ,
        street:enteredStreet ,
        city:enteredCity ,
        postalcode:enteredPostalcode 
     });
  };
const nameControlClasses= `${classes.control}
 ${isformInputValidity.name ?'': classes.invalid }`
const streetControlClasses= `${classes.control}
 ${isformInputValidity.street ?'': classes.invalid }`
const postalcodeControlClasses= `${classes.control}
 ${isformInputValidity.postalcode?'': classes.invalid }`
const cityControlClasses= `${classes.control}
 ${isformInputValidity.city?'': classes.invalid }`


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!isformInputValidity.name && <p>please enter a Valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!isformInputValidity.street && <p>please enter a Valid street</p>}
      </div>
      <div className={postalcodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalcodeInputRef} />
        {!isformInputValidity.postalcode && <p>please enter a Postal code</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef } />
        {!isformInputValidity.city && <p>please enter a Valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <div>
        <button className={classes.submit}   >Confirm</button>
        
        </div>
        
      </div>
    </form>
  );
};

export default Checkout;