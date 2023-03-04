import React from "react";



const CartContext = React.createContext({
    items:[],
    totalAmount:(item)=>{},
    removeItem:(id)=>{},
});

export default CartContext