import { useState } from "react";
import Header from "./Componets/Layout/header";
import Meals from "./Componets/Meals/Meals";
import Cart from "./Componets/Cart/cart";
import CartProvider from "./store/Cart-Provider";

function App() {
  const [cartIsShown, setCartIsShown]= useState(false);
  // const [cartdata, setIsCartData] = useState(false);?

//   useEffect(() => {
//     const cartItems = JSON.parse(localStorage.getItem('cart'));
//     if ( cartItems === 'true') {
//       setIsCartData(true)
//     }
//   }, []);
//  const cartHandler = ()=>{
//   localStorage.setItem('cart', 'true' );
//   setIsCartData(true)
//  }
//   // useEffect(() => {
   
//   // }, [cartCtx.items]);





  const showCartHandler =()=>{
    setCartIsShown(true);
  };
  const hideCartHandler =()=>{
    setCartIsShown(false)
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} 
        
      />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
        
      </main>
    </CartProvider>
  );
}

export default App;
