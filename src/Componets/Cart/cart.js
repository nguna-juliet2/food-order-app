import { useContext } from 'react';
import Modal from '../UI/modal';
import classes from './cart.module.css';
import CartItem from './cartItem';
import CartContext from '../../store/Cart-context';

const Cart = props =>{
    const cartCtx = useContext(CartContext);
    const totalAmount =  `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id)=> {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler =(item) => {
        cartCtx.addItem({...item, amount:1});
    };

    const cartItem = ( <ul className={classes['cart-items']}>
         
    {cartCtx.items.map(item => (
    <CartItem 
    key={item.id} 
    name={item.name} 
    amount={item.amount}
    price={item.price} 
    onRmove={cartItemRemoveHandler.bind(null,item.id)}
    onAdd={cartItemAddHandler.bind(null,item)}
    />
    
    ))}
    </ul>);
    return(
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div >
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>close</button>
                {hasItems&&<button className={classes.button}>order</button>}

            </div>
        </Modal>
    )
};


export default Cart;