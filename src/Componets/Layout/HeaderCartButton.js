import { useContext } from "react";
import CartIcon from "../Cart/carticon";
// import cartContext from "../../store/Cart-context";
import classes from './HeaderCartButton.module.css';
// import CartProvider from "../../store/Cart-Provider";
import CartContext from "../../store/Cart-context";
const HeaderCartButton = props =>{
    const cartctx =useContext(CartContext)
    const NumberofCartItems =cartctx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount;
    },0)
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {NumberofCartItems}
            </span>
        </button>
    )
};

export default HeaderCartButton;