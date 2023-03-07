import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/Cart-context';
const MealItem = props =>{
    const cartctx = useContext(CartContext);
    const price =`$${props.price}`;

    const addItemCartHandler = amount =>{
       cartctx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price,
        Image:props.img
       });
        
    }
    return(
        <li className={classes.meal}>
            <div><h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            <div className={classes.mealsImg}>
            <img  src={props.image} alt={props.name} />
            </div>
            
            </div>
           <div>
            <MealItemForm onAddToCart={addItemCartHandler}/>
           </div>
        </li>
        
    )
};
export default MealItem