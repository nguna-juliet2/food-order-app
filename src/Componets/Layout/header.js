import React,{Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from './header.module.css';
import mealsImage from '../../Componets/Assets/meals.jpg';
 

const Header = props =>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>RactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes.mainimage}>
                <img src= {mealsImage} alt="delicious foods"/>
            </div>
        </Fragment>
    )
};




export default Header;