'use client';
import {useState} from "react";
import Header from "@/app/componenets/Layout/Header";
import Meals from "@/app/componenets/Meals/Meals";
import Cart from "@/app/componenets/Cart/Cart";
import CartContextProvider from "@/app/componenets/store/CartContextProvider";


function Home() {
 const [cartIsVisible, setCartVisible] = useState(false)
    const showCartHandler = ()=>{
     setCartVisible(true)
    }
    const hideCartHandler = ()=>{
        setCartVisible(false)
    }
  return (
    <CartContextProvider>
        {cartIsVisible && <Cart onHideCart ={hideCartHandler} />}
      <Header onShowCart ={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default Home;
