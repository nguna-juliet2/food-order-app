import React, { useContext, useState } from 'react';
import Modal from '../UI/modal';
import classes from './cart.module.css';
import CartItem from './cartItem';
import CartContext from '../../store/Cart-context';
import Checkout from './CheckoutForm';

const Cart = props =>{
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSumit, setDidSumit] = useState(false)

    const [isOrder, setIsOrder]= useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount =  `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id)=> {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler =(item) => {
        cartCtx.addItem({...item, amount:1});
    };
    

    const onClickHander=()=>{
        setIsOrder(true)
    };
    const submitOrderHandler = async (userData)=>{
        setIsSubmitting(true);
       await fetch('https://food-order-app-ac68f-default-rtdb.firebaseio.com/orders.json' , {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSumit(true)
        cartCtx.clearCart();
    };

    const cartItem = ( <ul className={classes['cart-items']}>
         
    {cartCtx.items.map(item => (
    <CartItem 
    key={item.id} 
    name={item.name} 
    amount={item.amount}
    price={item.price} 
    onRemove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item)}
    
    />
    
    ))}
    </ul>);
    const modalActions= <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>close</button>
    {hasItems&&<button className={classes.button} onClick={onClickHander}>order</button>}

</div>

const cartModalcontent = (<React.Fragment>
       {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div >
            {isOrder&&<Checkout  onConfrim ={submitOrderHandler} onCancel={props.onClose}/>}
            {!isOrder && modalActions}
</React.Fragment>);
const isSubmittingModalContent= <p>Sendind order data..</p>
const didSumitModalContent = <React.Fragment>
<p>Successfully sent the order! </p>
<div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>close</button> </div>
    </React.Fragment>
    return(
        
        <Modal onClose={props.onClose}>
         
            {!isSubmitting&& !didSumit&& cartModalcontent}
            {isSubmitting && isSubmittingModalContent }
            {!isSubmitting && didSumit&& didSumitModalContent}

        </Modal>
    )
};


export default Cart;